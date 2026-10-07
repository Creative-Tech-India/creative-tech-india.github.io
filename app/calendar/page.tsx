import type { Metadata } from "next";
import eventsRaw from "@/data/events.json";
import { CalendarEvent } from "@/types/event";

export const metadata: Metadata = {
  title: "Calendar | Creative Technology India",
  description:
    "Upcoming creative technology events, exhibitions, workshops, meetups, and conferences across India.",
};

const events: CalendarEvent[] = eventsRaw as CalendarEvent[];

function parseEventDate(event: CalendarEvent): number {
  if (event.startDate) {
    const parsed = new Date(event.startDate).getTime();
    if (!isNaN(parsed)) return parsed;
  }
  const parsed = new Date(event.date).getTime();
  if (!isNaN(parsed)) return parsed;
  return 0;
}

export default function CalendarPage() {
  const now = new Date();
  // Start of today in local time for clean comparison
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

  // Filter and sort:
  // Upcoming events: earliest/soonest upcoming on top (ascending order)
  const upcomingEvents = events
    .filter((event) => {
      const time = parseEventDate(event);
      return time >= todayStart;
    })
    .sort((a, b) => parseEventDate(a) - parseEventDate(b));

  // Past events: towards the bottom, sorted newest to oldest (descending order)
  const pastEvents = events
    .filter((event) => {
      const time = parseEventDate(event);
      return time < todayStart && time > 0;
    })
    .sort((a, b) => parseEventDate(b) - parseEventDate(a));

  const hasEvents = events.length > 0;

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

      {!hasEvents ? (
        /* Coming Soon State */
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
            <div>
              <a
                href="mailto:hello@creativetechindia.net?subject=Upcoming%20Event%20Submission"
                className="action-link"
              >
                Email Event Details ↗
              </a>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Upcoming Events Section (Latest upcoming on top) */}
          <section style={{ marginBottom: "3rem" }}>
            <div className="section-header">
              <span className="section-tag">SCHEDULE</span>
              <h2 className="section-title">Upcoming Events</h2>
              <p className="section-desc">
                Latest upcoming gatherings, conferences, workshops, and exhibitions.
              </p>
            </div>

            {upcomingEvents.length === 0 ? (
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "1rem" }}>
                No upcoming events currently scheduled. Check back soon or submit one below.
              </p>
            ) : (
              <div className="cards-grid" style={{ marginTop: "1.5rem" }}>
                {upcomingEvents.map((evt, idx) => (
                  <article key={evt.id || idx} className="item-card">
                    <div className="item-header">
                      <span className="item-badge">
                        {evt.location}
                        {evt.category ? ` • ${evt.category}` : ""}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "var(--accent)",
                          fontWeight: 600,
                        }}
                      >
                        {evt.date}
                        {evt.time ? ` | ${evt.time}` : ""}
                      </span>
                    </div>

                    <h3 className="item-title" style={{ fontSize: "0.95rem", marginTop: "0.2rem" }}>
                      {evt.title}
                    </h3>

                    {evt.description && (
                      <p className="item-desc" style={{ marginTop: "0.3rem" }}>
                        {evt.description}
                      </p>
                    )}

                    {evt.link && (
                      <div style={{ marginTop: "0.6rem" }}>
                        <a
                          href={evt.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-link"
                        >
                          Event Link ↗
                        </a>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}
          </section>

          {/* Past Events Section (Older events towards the bottom) */}
          {pastEvents.length > 0 && (
            <section style={{ marginBottom: "3rem" }}>
              <div className="section-header">
                <span className="section-tag">ARCHIVE</span>
                <h2 className="section-title">Past Events</h2>
                <p className="section-desc">
                  Previous exhibitions, conferences, and meetups.
                </p>
              </div>

              <div className="cards-grid" style={{ marginTop: "1.5rem", opacity: 0.85 }}>
                {pastEvents.map((evt, idx) => (
                  <article key={evt.id || idx} className="item-card">
                    <div className="item-header">
                      <span className="item-badge">
                        {evt.location}
                        {evt.category ? ` • ${evt.category}` : ""}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "var(--text-dim)",
                        }}
                      >
                        {evt.date}
                      </span>
                    </div>

                    <h3 className="item-title" style={{ fontSize: "0.95rem", marginTop: "0.2rem" }}>
                      {evt.title}
                    </h3>

                    {evt.description && (
                      <p className="item-desc" style={{ marginTop: "0.3rem" }}>
                        {evt.description}
                      </p>
                    )}

                    {evt.link && (
                      <div style={{ marginTop: "0.6rem" }}>
                        <a
                          href={evt.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-link"
                        >
                          Archive / Link ↗
                        </a>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Submit an Event Banner */}
          <section className="cta-banner" style={{ marginTop: "2rem" }}>
            <div className="cta-text">
              <h3>Hosting a Creative Tech Event?</h3>
              <p>
                Submit details for upcoming workshops, exhibitions, meetups, or live coding jams across India.
              </p>
            </div>
            <div>
              <a
                href="mailto:hello@creativetechindia.net?subject=Upcoming%20Event%20Submission"
                className="action-link"
              >
                Email hello@creativetechindia.net ↗
              </a>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
