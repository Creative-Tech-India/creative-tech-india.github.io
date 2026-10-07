import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calendar | Creative Technology India",
  description:
    "Upcoming creative technology events, exhibitions, workshops, meetups, and conferences across India. Coming soon.",
};

export default function CalendarPage() {
  return (
    <main className="container">
      {/* Hero */}
      <section className="about-hero">
        <div className="hero-meta">CALENDAR & EVENTS</div>
        <h1>Calendar</h1>
        <p className="lead-text">
          A community calendar tracking upcoming creative technology exhibitions,
          festivals, workshops, algoraves, hackathons, and artist talks across India.
        </p>
      </section>

      {/* Coming Soon Notice */}
      <section style={{ marginTop: "1rem", marginBottom: "3rem" }}>
        <div
          style={{
            borderLeft: "2px solid var(--accent)",
            paddingLeft: "1.25rem",
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
            maxWidth: "600px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--accent)",
              marginBottom: "0.5rem",
            }}
          >
            Coming Soon
          </div>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              marginBottom: "1rem",
            }}
          >
            We are curating and preparing the event schedule. Soon you&apos;ll be able to explore dates,
            times, locations, and registration links for creative technology gatherings across India.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link href="/suggest" className="action-link">
              Suggest an Event ↗
            </Link>
            <a
              href="mailto:hello@creativetechindia.net?subject=Upcoming%20Event%20Submission"
              className="action-link"
            >
              Email Event Details ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
