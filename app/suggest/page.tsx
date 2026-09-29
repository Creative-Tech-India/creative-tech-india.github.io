"use client";

import { useState } from "react";
import Link from "next/link";
import { Category, CATEGORIES } from "@/types/directory";

export default function SuggestPage() {
  const [requestType, setRequestType] = useState<string>("Add New Listing");
  const [name, setName] = useState("");
  const [category, setCategory] = useState<Category>("Studio");
  const [city, setCity] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState("");
  const [submitterEmail, setSubmitterEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleResetForm = () => {
    setRequestType("Add New Listing");
    setName("");
    setCategory("Studio");
    setCity("");
    setLink("");
    setTags("");
    setSubmitterEmail("");
    setNotes("");
    setSuccessMessage(null);
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "18faff66-38a9-4f8a-a0e4-991f6dfcebdd";

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Directory Request [${requestType}]: ${name}`,
          from_name: "Creative Tech India Directory Form",
          request_type: requestType,
          name,
          category,
          location: city || "Not specified",
          link: link || "Not specified",
          tags: tags || "None",
          submitter_email: submitterEmail || "Anonymous",
          notes: notes || "None",
          botcheck: honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit request");
      }

      setSuccessMessage(
        `Thank you! Your request for "${name}" has been sent to hello@creativetechindia.net.`
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      {/* Header */}
      <section className="suggest-hero">
        <div className="hero-meta">DIRECTORY SUGGESTION</div>
        <h1>Suggest or Update an Entry</h1>
        <p className="lead-text">
          Use this form to suggest a new addition, update existing details, or request
          a removal. All submissions are reviewed by our team before going live.
        </p>
      </section>

      <section className="suggest-container">
        {/* Success Alert */}
        {successMessage && (
          <div className="form-alert success">
            <div className="alert-title">✓ Request Received</div>
            <p className="alert-body">{successMessage}</p>
            <div className="alert-actions">
              <button
                type="button"
                className="btn-pill"
                onClick={handleResetForm}
              >
                Submit another request
              </button>
              <Link href="/" className="btn-pill secondary">
                Back to Directory ↗
              </Link>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {errorMessage && (
          <div className="form-alert error">
            <div className="alert-title">⚠ Submission Error</div>
            <p className="alert-body">{errorMessage}</p>
            <div className="alert-actions">
              <a
                href={`mailto:hello@creativetechindia.net?subject=Directory%20Request&body=Name:%20${encodeURIComponent(
                  name
                )}%0ACity:%20${encodeURIComponent(
                  city
                )}%0ALink:%20${encodeURIComponent(link)}`}
                className="btn-pill"
              >
                Send via Email Instead ↗
              </a>
            </div>
          </div>
        )}

        {!successMessage && (
          <form onSubmit={handleSubmit} className="suggest-form">
            <div className="form-section" style={{ borderTop: "none", paddingTop: 0 }}>
              {/* Request Type */}
              <div className="form-group">
                <label className="form-label" htmlFor="request-type">
                  Request Type <span className="required">*</span>
                </label>
                <select
                  id="request-type"
                  required
                  className="form-select"
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value)}
                >
                  <option value="Add New Listing">Add a new listing</option>
                  <option value="Update Existing Listing">Update an existing listing</option>
                  <option value="Remove Listing">Request listing removal / deletion</option>
                </select>
              </div>

              {/* Name & Category */}
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="entry-name">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    id="entry-name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Entity, studio, artist, or initiative name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="entry-category">
                    Category
                  </label>
                  <select
                    id="entry-category"
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Category)}
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Location & Link */}
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="entry-city">
                    Location
                  </label>
                  <input
                    id="entry-city"
                    type="text"
                    className="form-input"
                    placeholder="City, region, or pan-India"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="entry-link">
                    Website or Link
                  </label>
                  <input
                    id="entry-link"
                    type="text"
                    className="form-input"
                    placeholder="e.g. yourstudio.com, instagram.com/name"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="form-group">
                <label className="form-label" htmlFor="entry-tags">
                  Focus Areas / Tags (Optional)
                </label>
                <input
                  id="entry-tags"
                  type="text"
                  className="form-input"
                  placeholder="e.g. XR, physical computing, creative code, projection mapping"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label" htmlFor="submitter-email">
                  Your Email (Optional)
                </label>
                <input
                  id="submitter-email"
                  type="email"
                  className="form-input"
                  placeholder="name@example.com"
                  value={submitterEmail}
                  onChange={(e) => setSubmitterEmail(e.target.value)}
                />
              </div>

              {/* Notes */}
              <div className="form-group">
                <label className="form-label" htmlFor="notes">
                  Details / Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  className="form-textarea"
                  placeholder="Provide any additional context, corrections, or reasons for update/removal..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              {/* Spam Honeypot */}
              <div style={{ display: "none" }} aria-hidden="true">
                <label htmlFor="website_hp">Leave empty</label>
                <input
                  id="website_hp"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="form-submit-row">
              <button
                type="submit"
                disabled={loading}
                className="btn-submit"
              >
                {loading ? "Submitting..." : "Submit Request ↗"}
              </button>
              <Link href="/" className="btn-cancel">
                Cancel
              </Link>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
