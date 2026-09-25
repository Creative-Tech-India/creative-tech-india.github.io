import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div>
          <p>
            <strong>Creative Technology India</strong> — Open index of Indian creative computing.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/">Directory</Link>
          <Link href="/about">About</Link>
          <Link href="/#contribute">Contribute</Link>
          <a
            href="https://github.com/Creative-Tech-India/creative-tech-india.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:hello@creativetechindia.net">Contact</a>
        </div>
      </div>
    </footer>
  );
}
