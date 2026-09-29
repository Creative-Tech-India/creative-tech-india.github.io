import { NextResponse } from "next/server";
import { CATEGORIES, Category } from "@/types/directory";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Spam honeypot trap
    if (body.website_hp) {
      return NextResponse.json({ success: true, message: "Received" });
    }

    const requestType = (body.request_type || "Add New Listing").trim();
    const name = (body.name || "").trim();
    const category = (body.category || "").trim() as Category;
    const city = (body.city || "").trim();
    let link = (body.link || "").trim();
    if (link && !link.startsWith("http://") && !link.startsWith("https://")) {
      if (link.includes(".")) {
        link = `https://${link}`;
      }
    }

    const tags = (body.tags || "").trim();
    const submitter_email = (body.submitter_email || "").trim();
    const notes = (body.notes || "").trim();

    // Validation: ONLY name is mandatory
    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name." },
        { status: 400 }
      );
    }

    // Build formatted email content
    const emailSubject = `Directory Request [${requestType}]: ${name}`;
    const emailBody = `Directory Request received for Creative Tech India:

Request Type: ${requestType}
Name: ${name}
Category: ${category || "Not specified"}
Location: ${city || "Not specified"}
Website/Link: ${link || "Not specified"}
Focus Areas / Tags: ${tags || "None"}
Submitter Email: ${submitter_email || "Anonymous"}

Details / Notes:
${notes || "None provided"}
`;

    // Send via Web3Forms if access key is set
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      const emailRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          subject: emailSubject,
          from_name: "Creative Tech India Directory Form",
          to_email: "hello@creativetechindia.net",
          request_type: requestType,
          name,
          category,
          city,
          link,
          tags,
          submitter_email,
          notes,
        }),
      });

      if (!emailRes.ok) {
        console.error("Web3Forms error:", await emailRes.text());
      }
    }

    // Generate formatted mailto link
    const mailto = `mailto:hello@creativetechindia.net?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    return NextResponse.json({
      success: true,
      mailto,
      message: `Thank you! Your request for "${name}" has been forwarded to hello@creativetechindia.net. We will review and update the directory.`,
    });
  } catch (err: unknown) {
    console.error("Error processing suggestion:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit request. Please try emailing directly.",
      },
      { status: 500 }
    );
  }
}
