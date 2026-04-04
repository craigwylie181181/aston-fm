'use client';

export default function LogoOptions() {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', background: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#0d1b2a', marginBottom: '8px', fontSize: '2rem' }}>Aston FM Logo Options</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '48px' }}>6 variations using brand colours: Green (#00b67a), Teal (#00a5b5), Blue (#3b7dd8)</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>

        {/* Option 1: Original Building Skyline */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '32px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <h3 style={{ color: '#0d1b2a', marginBottom: '24px' }}>Option 1: Building Skyline</h3>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00b67a" />
                <stop offset="50%" stopColor="#00a5b5" />
                <stop offset="100%" stopColor="#3b7dd8" />
              </linearGradient>
            </defs>
            <rect x="20" y="40" width="30" height="60" rx="3" fill="url(#grad1)" />
            <rect x="55" y="20" width="25" height="80" rx="3" fill="url(#grad1)" opacity="0.85" />
            <rect x="85" y="50" width="20" height="50" rx="3" fill="url(#grad1)" opacity="0.7" />
            <rect x="27" y="48" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="37" y="48" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="27" y="60" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="37" y="60" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="62" y="28" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="62" y="40" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="62" y="52" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="90" y="58" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="90" y="70" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <circle cx="95" cy="30" r="14" stroke="url(#grad1)" strokeWidth="4" fill="none" opacity="0.5" />
            <circle cx="95" cy="30" r="5" fill="url(#grad1)" opacity="0.5" />
          </svg>
          <p style={{ color: '#666', fontSize: '14px', marginTop: '16px' }}>Current logo {"—"} building skyline with gear accent</p>
        </div>

        {/* Option 2: Monogram "A" with building silhouette */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '32px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <h3 style={{ color: '#0d1b2a', marginBottom: '24px' }}>Option 2: Monogram A</h3>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00b67a" />
                <stop offset="100%" stopColor="#3b7dd8" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="100" height="100" rx="20" fill="url(#grad2)" />
            <path d="M60 25 L85 90 L77 90 L71 72 L49 72 L43 90 L35 90 Z M53 64 L67 64 L60 40 Z" fill="white" />
            <rect x="50" y="78" width="20" height="3" rx="1.5" fill="white" opacity="0.6" />
            <rect x="46" y="84" width="28" height="3" rx="1.5" fill="white" opacity="0.4" />
          </svg>
          <p style={{ color: '#666', fontSize: '14px', marginTop: '16px' }}>Bold monogram "A" in gradient rounded square</p>
        </div>

        {/* Option 3: Hexagonal with building */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '32px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <h3 style={{ color: '#0d1b2a', marginBottom: '24px' }}>Option 3: Hex Shield</h3>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00a5b5" />
                <stop offset="100%" stopColor="#00b67a" />
              </linearGradient>
            </defs>
            <path d="M60 8 L105 30 L105 78 L60 112 L15 78 L15 30 Z" fill="url(#grad3)" />
            <rect x="42" y="42" width="14" height="40" rx="2" fill="white" opacity="0.9" />
            <rect x="60" y="32" width="14" height="50" rx="2" fill="white" opacity="0.9" />
            <rect x="47" y="48" width="4" height="4" rx="1" fill="url(#grad3)" />
            <rect x="47" y="56" width="4" height="4" rx="1" fill="url(#grad3)" />
            <rect x="47" y="64" width="4" height="4" rx="1" fill="url(#grad3)" />
            <rect x="65" y="38" width="4" height="4" rx="1" fill="url(#grad3)" />
            <rect x="65" y="46" width="4" height="4" rx="1" fill="url(#grad3)" />
            <rect x="65" y="54" width="4" height="4" rx="1" fill="url(#grad3)" />
            <rect x="65" y="62" width="4" height="4" rx="1" fill="url(#grad3)" />
          </svg>
          <p style={{ color: '#666', fontSize: '14px', marginTop: '16px' }}>Hexagonal shield with twin towers</p>
        </div>

        {/* Option 4: Circle with abstract building + leaf */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '32px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <h3 style={{ color: '#0d1b2a', marginBottom: '24px' }}>Option 4: Circle Eco</h3>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b7dd8" />
                <stop offset="100%" stopColor="#00b67a" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="52" fill="url(#grad4)" />
            <rect x="40" y="45" width="16" height="35" rx="2" fill="white" opacity="0.9" />
            <rect x="60" y="35" width="16" height="45" rx="2" fill="white" opacity="0.9" />
            <rect x="44" y="50" width="5" height="4" rx="1" fill="url(#grad4)" />
            <rect x="44" y="58" width="5" height="4" rx="1" fill="url(#grad4)" />
            <rect x="44" y="66" width="5" height="4" rx="1" fill="url(#grad4)" />
            <rect x="64" y="40" width="5" height="4" rx="1" fill="url(#grad4)" />
            <rect x="64" y="48" width="5" height="4" rx="1" fill="url(#grad4)" />
            <rect x="64" y="56" width="5" height="4" rx="1" fill="url(#grad4)" />
            <rect x="64" y="64" width="5" height="4" rx="1" fill="url(#grad4)" />
            <path d="M82 28 C82 28 92 38 82 52 C82 52 78 40 82 28 Z" fill="white" opacity="0.7" />
            <path d="M85 30 C85 30 95 34 90 48 C90 48 83 38 85 30 Z" fill="white" opacity="0.5" />
          </svg>
          <p style={{ color: '#666', fontSize: '14px', marginTop: '16px' }}>Circular badge with buildings and sustainability leaf</p>
        </div>

        {/* Option 5: Modern lettermark AFM */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '32px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <h3 style={{ color: '#0d1b2a', marginBottom: '24px' }}>Option 5: AFM Lettermark</h3>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00b67a" />
                <stop offset="50%" stopColor="#00a5b5" />
                <stop offset="100%" stopColor="#3b7dd8" />
              </linearGradient>
            </defs>
            <rect x="8" y="8" width="104" height="104" rx="12" fill="#0d1b2a" />
            <text x="60" y="72" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="42" fill="url(#grad5)">AFM</text>
            <rect x="24" y="82" width="72" height="3" rx="1.5" fill="url(#grad5)" opacity="0.5" />
            <rect x="24" y="34" width="72" height="2" rx="1" fill="url(#grad5)" opacity="0.2" />
          </svg>
          <p style={{ color: '#666', fontSize: '14px', marginTop: '16px' }}>Navy square with gradient "AFM" lettermark</p>
        </div>

        {/* Option 6: Geometric bars / equaliser */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '32px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <h3 style={{ color: '#0d1b2a', marginBottom: '24px' }}>Option 6: Metric Bars</h3>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="70" width="16" height="35" rx="4" fill="#00b67a" />
            <rect x="36" y="50" width="16" height="55" rx="4" fill="#00b67a" opacity="0.85" />
            <rect x="57" y="25" width="16" height="80" rx="4" fill="#00a5b5" />
            <rect x="78" y="40" width="16" height="65" rx="4" fill="#3b7dd8" opacity="0.85" />
            <rect x="99" y="55" width="16" height="50" rx="4" fill="#3b7dd8" opacity="0.65" />
            <path d="M20 68 L44 48 L65 23 L86 38 L107 53" stroke="#0d1b2a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
            <circle cx="20" cy="68" r="3" fill="#0d1b2a" opacity="0.4" />
            <circle cx="44" cy="48" r="3" fill="#0d1b2a" opacity="0.4" />
            <circle cx="65" cy="23" r="3" fill="#0d1b2a" opacity="0.4" />
            <circle cx="86" cy="38" r="3" fill="#0d1b2a" opacity="0.4" />
            <circle cx="107" cy="53" r="3" fill="#0d1b2a" opacity="0.4" />
          </svg>
          <p style={{ color: '#666', fontSize: '14px', marginTop: '16px' }}>Performance metric bars with trend line</p>
        </div>
      </div>

      {/* Dark background preview */}
      <h2 style={{ textAlign: 'center', color: '#0d1b2a', marginTop: '64px', marginBottom: '24px' }}>Dark Background Preview</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', background: '#0d1b2a', borderRadius: '16px', padding: '32px' }}>
        <div style={{ textAlign: 'center' }}>
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="dg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#00b67a" /><stop offset="50%" stopColor="#00a5b5" /><stop offset="100%" stopColor="#3b7dd8" /></linearGradient></defs>
            <rect x="20" y="40" width="30" height="60" rx="3" fill="url(#dg1)" /><rect x="55" y="20" width="25" height="80" rx="3" fill="url(#dg1)" opacity="0.85" /><rect x="85" y="50" width="20" height="50" rx="3" fill="url(#dg1)" opacity="0.7" />
            <rect x="27" y="48" width="7" height="6" rx="1" fill="white" opacity="0.9" /><rect x="37" y="48" width="7" height="6" rx="1" fill="white" opacity="0.9" /><rect x="27" y="60" width="7" height="6" rx="1" fill="white" opacity="0.9" /><rect x="37" y="60" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="62" y="28" width="7" height="6" rx="1" fill="white" opacity="0.9" /><rect x="62" y="40" width="7" height="6" rx="1" fill="white" opacity="0.9" /><rect x="62" y="52" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="90" y="58" width="7" height="6" rx="1" fill="white" opacity="0.9" /><rect x="90" y="70" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <circle cx="95" cy="30" r="14" stroke="url(#dg1)" strokeWidth="4" fill="none" opacity="0.5" /><circle cx="95" cy="30" r="5" fill="url(#dg1)" opacity="0.5" />
          </svg>
          <p style={{ color: '#8899aa', fontSize: '11px', marginTop: '8px' }}>1. Skyline</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="dg2" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00b67a" /><stop offset="100%" stopColor="#3b7dd8" /></linearGradient></defs>
            <rect x="10" y="10" width="100" height="100" rx="20" fill="url(#dg2)" />
            <path d="M60 25 L85 90 L77 90 L71 72 L49 72 L43 90 L35 90 Z M53 64 L67 64 L60 40 Z" fill="white" />
            <rect x="50" y="78" width="20" height="3" rx="1.5" fill="white" opacity="0.6" /><rect x="46" y="84" width="28" height="3" rx="1.5" fill="white" opacity="0.4" />
          </svg>
          <p style={{ color: '#8899aa', fontSize: '11px', marginTop: '8px' }}>2. Monogram</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="dg3" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#00a5b5" /><stop offset="100%" stopColor="#00b67a" /></linearGradient></defs>
            <path d="M60 8 L105 30 L105 78 L60 112 L15 78 L15 30 Z" fill="url(#dg3)" />
            <rect x="42" y="42" width="14" height="40" rx="2" fill="white" opacity="0.9" /><rect x="60" y="32" width="14" height="50" rx="2" fill="white" opacity="0.9" />
            <rect x="47" y="48" width="4" height="4" rx="1" fill="url(#dg3)" /><rect x="47" y="56" width="4" height="4" rx="1" fill="url(#dg3)" /><rect x="47" y="64" width="4" height="4" rx="1" fill="url(#dg3)" />
            <rect x="65" y="38" width="4" height="4" rx="1" fill="url(#dg3)" /><rect x="65" y="46" width="4" height="4" rx="1" fill="url(#dg3)" /><rect x="65" y="54" width="4" height="4" rx="1" fill="url(#dg3)" /><rect x="65" y="62" width="4" height="4" rx="1" fill="url(#dg3)" />
          </svg>
          <p style={{ color: '#8899aa', fontSize: '11px', marginTop: '8px' }}>3. Hex Shield</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="dg4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3b7dd8" /><stop offset="100%" stopColor="#00b67a" /></linearGradient></defs>
            <circle cx="60" cy="60" r="52" fill="url(#dg4)" />
            <rect x="40" y="45" width="16" height="35" rx="2" fill="white" opacity="0.9" /><rect x="60" y="35" width="16" height="45" rx="2" fill="white" opacity="0.9" />
            <rect x="44" y="50" width="5" height="4" rx="1" fill="url(#dg4)" /><rect x="44" y="58" width="5" height="4" rx="1" fill="url(#dg4)" /><rect x="44" y="66" width="5" height="4" rx="1" fill="url(#dg4)" />
            <rect x="64" y="40" width="5" height="4" rx="1" fill="url(#dg4)" /><rect x="64" y="48" width="5" height="4" rx="1" fill="url(#dg4)" /><rect x="64" y="56" width="5" height="4" rx="1" fill="url(#dg4)" /><rect x="64" y="64" width="5" height="4" rx="1" fill="url(#dg4)" />
            <path d="M82 28 C82 28 92 38 82 52 C82 52 78 40 82 28 Z" fill="white" opacity="0.7" /><path d="M85 30 C85 30 95 34 90 48 C90 48 83 38 85 30 Z" fill="white" opacity="0.5" />
          </svg>
          <p style={{ color: '#8899aa', fontSize: '11px', marginTop: '8px' }}>4. Circle Eco</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="dg5" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00b67a" /><stop offset="50%" stopColor="#00a5b5" /><stop offset="100%" stopColor="#3b7dd8" /></linearGradient></defs>
            <rect x="8" y="8" width="104" height="104" rx="12" fill="#0d1b2a" stroke="url(#dg5)" strokeWidth="2" />
            <text x="60" y="72" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="42" fill="url(#dg5)">AFM</text>
            <rect x="24" y="82" width="72" height="3" rx="1.5" fill="url(#dg5)" opacity="0.5" />
          </svg>
          <p style={{ color: '#8899aa', fontSize: '11px', marginTop: '8px' }}>5. AFM Mark</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="70" width="16" height="35" rx="4" fill="#00b67a" /><rect x="36" y="50" width="16" height="55" rx="4" fill="#00b67a" opacity="0.85" />
            <rect x="57" y="25" width="16" height="80" rx="4" fill="#00a5b5" /><rect x="78" y="40" width="16" height="65" rx="4" fill="#3b7dd8" opacity="0.85" /><rect x="99" y="55" width="16" height="50" rx="4" fill="#3b7dd8" opacity="0.65" />
            <path d="M20 68 L44 48 L65 23 L86 38 L107 53" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
          </svg>
          <p style={{ color: '#8899aa', fontSize: '11px', marginTop: '8px' }}>6. Metrics</p>
        </div>
      </div>
    </div>
  );
}
