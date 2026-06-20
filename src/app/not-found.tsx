import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0d1b2a 0%, #1b2d45 50%, #0d1b2a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: 'white',
      textAlign: 'center',
    }}>
      <div style={{ marginBottom: '2rem' }}>
        <svg width={60} height={60} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="brandGrad404" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00b67a" />
              <stop offset="50%" stopColor="#00a5b5" />
              <stop offset="100%" stopColor="#3b7dd8" />
            </linearGradient>
          </defs>
          <rect x="20" y="40" width="30" height="60" rx="3" fill="white" />
          <rect x="55" y="20" width="25" height="80" rx="3" fill="white" opacity="0.85" />
          <rect x="85" y="50" width="20" height="50" rx="3" fill="white" opacity="0.7" />
          <rect x="27" y="48" width="7" height="6" rx="1" fill="url(#brandGrad404)" opacity="0.9" />
          <rect x="37" y="48" width="7" height="6" rx="1" fill="url(#brandGrad404)" opacity="0.9" />
          <rect x="27" y="60" width="7" height="6" rx="1" fill="url(#brandGrad404)" opacity="0.9" />
          <rect x="37" y="60" width="7" height="6" rx="1" fill="url(#brandGrad404)" opacity="0.9" />
          <rect x="62" y="28" width="7" height="6" rx="1" fill="url(#brandGrad404)" opacity="0.9" />
          <rect x="62" y="40" width="7" height="6" rx="1" fill="url(#brandGrad404)" opacity="0.9" />
          <rect x="62" y="52" width="7" height="6" rx="1" fill="url(#brandGrad404)" opacity="0.9" />
          <rect x="90" y="58" width="7" height="6" rx="1" fill="url(#brandGrad404)" opacity="0.9" />
          <rect x="90" y="70" width="7" height="6" rx="1" fill="url(#brandGrad404)" opacity="0.9" />
          <circle cx="95" cy="30" r="14" stroke="url(#brandGrad404)" strokeWidth="4" fill="none" opacity="0.5" />
          <circle cx="95" cy="30" r="5" fill="url(#brandGrad404)" opacity="0.5" />
        </svg>
      </div>
      <h1 style={{ fontSize: '5rem', fontWeight: 800, margin: 0, lineHeight: 1, background: 'linear-gradient(135deg, #00b67a, #00a5b5, #3b7dd8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '1rem 0 0.5rem', opacity: 0.9 }}>
        Page Not Found
      </h2>
      <p style={{ fontSize: '1rem', opacity: 0.7, maxWidth: '400px', lineHeight: 1.6, marginBottom: '2rem' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{
          display: 'inline-block',
          padding: '0.75rem 2rem',
          background: 'linear-gradient(135deg, #00b67a, #00a5b5)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '0.95rem',
          transition: 'transform 0.2s',
        }}>
          Back to Homepage
        </Link>
        <Link href="/contact" style={{
          display: 'inline-block',
          padding: '0.75rem 2rem',
          border: '2px solid rgba(255,255,255,0.3)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '0.95rem',
        }}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}
