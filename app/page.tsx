"use client";

import { useState, useMemo } from "react";
import directoryRaw from "@/data/directory.json";
import { DirectoryItem, Category } from "@/types/directory";

const DIRECTORY_DATA: DirectoryItem[] = directoryRaw as DirectoryItem[];

const CATEGORIES: Category[] = [
  "Organisation",
  "Studio",
  "Community",
  "Program",
  "Event",
  "Artist",
  "Award",
];

const CATEGORY_PLURALS: Record<string, string> = {
  ALL: "All",
  Organisation: "Organisations",
  Studio: "Studios",
  Community: "Communities",
  Program: "Programs",
  Event: "Events",
  Artist: "Artists",
  Award: "Awards",
};

export default function DirectoryPage() {
  const [currentCategory, setCurrentCategory] = useState<string>("ALL");
  const [currentCity, setCurrentCity] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<"name" | "category" | "city">(
    "name"
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Extract unique cities
  const cities = useMemo(() => {
    const set = new Set<string>();
    DIRECTORY_DATA.forEach((item) => {
      if (!item.city) return;
      item.city.split(/[,/&]/).forEach((c) => {
        const clean = c.trim().replace(/\s+/g, " ");
        if (
          clean &&
          clean.length > 1 &&
          !clean.toLowerCase().includes("mobile") &&
          !clean.toLowerCase().includes("hybrid")
        ) {
          set.add(clean);
        }
      });
    });
    return Array.from(set).sort();
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: DIRECTORY_DATA.length };
    DIRECTORY_DATA.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered and sorted data
  const filteredData = useMemo(() => {
    const filtered = DIRECTORY_DATA.filter((item) => {
      if (currentCategory !== "ALL" && item.category !== currentCategory) {
        return false;
      }
      if (
        currentCity &&
        !item.city.toLowerCase().includes(currentCity.toLowerCase())
      ) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(q);
        const matchCity = item.city.toLowerCase().includes(q);
        const matchCat = item.category.toLowerCase().includes(q);
        if (!matchName && !matchCity && !matchCat) {
          return false;
        }
      }
      return true;
    });

    filtered.sort((a, b) => {
      let valA = (a[sortColumn] || "").toLowerCase();
      let valB = (b[sortColumn] || "").toLowerCase();
      if (valA < valB) return sortDirection === "asc" ? -1 : 1;
      if (valA > valB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [currentCategory, currentCity, searchQuery, sortColumn, sortDirection]);

  const handleSort = (column: "name" | "category" | "city") => {
    if (sortColumn === column) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setCurrentCategory("ALL");
    setCurrentCity("");
  };

  const renderLink = (item: DirectoryItem) => {
    if (
      !item.link ||
      item.link.trim() === "" ||
      item.link.includes("[link removed]")
    ) {
      return <span className="no-link">—</span>;
    }
    const isInstagram = item.link.includes("instagram.com");
    const isLinkedIn = item.link.includes("linkedin.com");
    const label = isInstagram
      ? "Instagram"
      : isLinkedIn
      ? "LinkedIn"
      : "Website";

    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="link-action"
      >
        <span>{label}</span>
        <span className="arrow">↗</span>
      </a>
    );
  };

  return (
    <main className="container">
      {/* Hero */}
      <section className="hero">
        <div className="hero-tags">#tech #art #creative #music #media</div>
        <h1 className="hero-desc">
          An open directory of studios, experimental labs, collectives, and
          artists working with creative code, physical computing, and new media
          across India.
        </h1>

        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-val">{DIRECTORY_DATA.length}</span>
            <span className="stat-lbl">Entries</span>
          </div>
          <span className="stat-divider">/</span>
          <div className="stat-item">
            <span className="stat-val">{cities.length}</span>
            <span className="stat-lbl">Cities</span>
          </div>
        </div>
      </section>

      {/* Controls Toolbar: Filters left, Search + City right */}
      <section className="controls-row">
        <div className="filter-pills">
          <button
            type="button"
            className={`pill ${currentCategory === "ALL" ? "active" : ""}`}
            onClick={() => setCurrentCategory("ALL")}
          >
            All <span className="count">{categoryCounts["ALL"] || 0}</span>
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`pill ${currentCategory === cat ? "active" : ""}`}
              onClick={() => setCurrentCategory(cat)}
            >
              {CATEGORY_PLURALS[cat] || cat}{" "}
              <span className="count">{categoryCounts[cat] || 0}</span>
            </button>
          ))}
        </div>

        <div className="search-location-group">
          <div className="search-wrapper">
            <span className="search-icon">
              <svg
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
              spellCheck="false"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-btn"
                aria-label="Clear search"
                onClick={() => setSearchQuery("")}
              >
                ✕
              </button>
            )}
          </div>

          <select
            className="select-city"
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
            aria-label="Filter by City"
          >
            <option value="">All Locations</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Table / Empty State */}
      {filteredData.length === 0 ? (
        <div className="empty-state">
          <div className="empty-title">No Entries Found</div>
          <div className="empty-desc">
            No listings matched your active filters or search query.
          </div>
          <button
            type="button"
            className="btn-reset"
            onClick={handleResetFilters}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th
                  onClick={() => handleSort("name")}
                  className={sortColumn === "name" ? "sort-active" : ""}
                >
                  Name
                  <span className="sort-icon">
                    {sortColumn === "name"
                      ? sortDirection === "asc"
                        ? "↑"
                        : "↓"
                      : "↕"}
                  </span>
                </th>
                <th
                  onClick={() => handleSort("category")}
                  className={sortColumn === "category" ? "sort-active" : ""}
                >
                  Category
                  <span className="sort-icon">
                    {sortColumn === "category"
                      ? sortDirection === "asc"
                        ? "↑"
                        : "↓"
                      : "↕"}
                  </span>
                </th>
                <th
                  onClick={() => handleSort("city")}
                  className={sortColumn === "city" ? "sort-active" : ""}
                >
                  Location
                  <span className="sort-icon">
                    {sortColumn === "city"
                      ? sortDirection === "asc"
                        ? "↑"
                        : "↓"
                      : "↕"}
                  </span>
                </th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={`${item.name}-${index}`}>
                  <td>
                    <div className="name-cell">
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className="badge">{item.category}</span>
                  </td>
                  <td className="city-cell">{item.city}</td>
                  <td>{renderLink(item)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Contribute Section */}
      <section className="contribute-section" id="contribute">
        <div className="contribute-card">
          <span className="contribute-meta">COMMUNITY LED</span>
          <h2 className="contribute-title">Contribute or Update Listings</h2>
          <p className="contribute-desc">
            This directory is an open, living resource. If you operate an
            initiative, studio, or event—or if you notice any details that need
            updating (apologies if any details are currently incomplete or
            inaccurate, we continuously aim to improve)—please write to us or
            open a pull request.
          </p>
          <div className="contribute-actions">
            <a
              href="mailto:hello@creativetechindia.net"
              className="action-link"
            >
              hello@creativetechindia.net ↗
            </a>
            <a
              href="/contribute"
              className="action-link"
            >
              Ways to Contribute ↗
            </a>
            <a
              href="https://github.com/Creative-Tech-India/creative-tech-india.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
            >
              Submit on GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
