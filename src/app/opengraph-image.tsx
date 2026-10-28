import { ImageResponse } from 'next/og';

export const alt = 'Aston Facilities Management — FM consulting for the UAE and beyond';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Branded social-share card used for every page that doesn't define its own
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #0d1b2a 0%, #1b2d45 55%, #0d1b2a 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <svg width={96} height={96} viewBox="0 0 120 120">
            <rect x="20" y="40" width="30" height="60" rx="3" fill="white" />
            <rect x="55" y="20" width="25" height="80" rx="3" fill="white" opacity="0.85" />
            <rect x="85" y="50" width="20" height="50" rx="3" fill="white" opacity="0.7" />
            <rect x="27" y="48" width="7" height="6" rx="1" fill="#00b67a" />
            <rect x="37" y="48" width="7" height="6" rx="1" fill="#00b67a" />
            <rect x="27" y="60" width="7" height="6" rx="1" fill="#00a5b5" />
            <rect x="37" y="60" width="7" height="6" rx="1" fill="#00a5b5" />
            <rect x="62" y="28" width="7" height="6" rx="1" fill="#00b67a" />
            <rect x="62" y="40" width="7" height="6" rx="1" fill="#00a5b5" />
            <rect x="62" y="52" width="7" height="6" rx="1" fill="#3b7dd8" />
            <rect x="90" y="58" width="7" height="6" rx="1" fill="#00a5b5" />
            <rect x="90" y="70" width="7" height="6" rx="1" fill="#3b7dd8" />
          </svg>
          <div style={{ display: 'flex', fontSize: 56, fontWeight: 700 }}>
            Aston&nbsp;<span style={{ color: '#00b67a' }}>FM</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>Smarter facilities management</div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, color: '#00b6a0' }}>for the UAE and beyond</div>
          <div style={{ fontSize: 30, marginTop: 28, color: 'rgba(255,255,255,0.75)' }}>
            ESG reporting · Performance dashboards · Cost reduction · Bid support
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: 'rgba(255,255,255,0.6)' }}>www.aston-fm.com</div>
      </div>
    ),
    size,
  );
}
