'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>
      {open && (
        <div className="mobile-menu" style={{ position: 'fixed', top: '70px', left: 0, right: 0, zIndex: 999 }}>
          <Link href="/#services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/#sectors" onClick={() => setOpen(false)}>Sectors</Link>
          <Link href="/insights" onClick={() => setOpen(false)}>Insights</Link>
          <Link href="/#case-studies" onClick={() => setOpen(false)}>Case Studies</Link>
          <Link href="/#about" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  );
}

