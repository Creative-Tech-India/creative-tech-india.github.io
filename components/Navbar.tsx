"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header>
      <div className="container header-inner">
        <Link href="/" className="logo-badge">
          <Image
            src="/logo.png"
            alt="Creative Technology India Logo"
            width={18}
            height={18}
            className="logo-img"
            priority
          />
          <div className="logo-title">CREATIVE TECH INDIA</div>
        </Link>
        <nav className="header-links">
          <Link
            href="/"
            className={`header-link ${pathname === "/" ? "active" : ""}`}
          >
            Directory
          </Link>
          <Link
            href="/about"
            className={`header-link ${pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link href="/#contribute" className="header-link">
            Contribute
          </Link>
          <a
            href="https://github.com/Creative-Tech-India/creative-tech-india.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
