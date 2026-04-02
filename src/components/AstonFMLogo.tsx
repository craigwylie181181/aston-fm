export default function AstonFMLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b67a" />
          <stop offset="50%" stopColor="#00a5b5" />
          <stop offset="100%" stopColor="#3b7dd8" />
        </linearGradient>
      </defs>
      <rect x="20" y="40" width="30" height="60" rx="3" fill="white" />
      <rect x="55" y="20" width="25" height="80" rx="3" fill="white" opacity="0.85" />
      <rect x="85" y="50" width="20" height="50" rx="3" fill="white" opacity="0.7" />
      <rect x="27" y="48" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="37" y="48" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="27" y="60" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="37" y="60" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="27" y="72" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="37" y="72" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="62" y="28" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="62" y="40" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="62" y="52" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="62" y="64" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="62" y="76" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="90" y="58" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="90" y="70" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="90" y="82" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <circle cx="95" cy="30" r="14" stroke="url(#brandGrad)" strokeWidth="4" fill="none" opacity="0.5" />
      <circle cx="95" cy="30" r="5" fill="url(#brandGrad)" opacity="0.5" />
    </svg>
  );
}
