export default function Kubernetes() {
  return (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="k8sGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#326CE5"/>
          <stop offset="100%" stopColor="#2857D6"/>
        </linearGradient>
      </defs>
      <rect width="256" height="256" fill="#fff"/>
      <path d="M128 20l108 60v120l-108 60-108-60V80z" fill="url(#k8sGradient)"/>
      <circle cx="128" cy="128" r="30" fill="#fff"/>
      <path d="M128 70v30M160 88l-21 21M178 128h-30M160 168l-21-21M128 186v-30M96 168l21-21M78 128h30M96 88l21 21" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="128" cy="70" r="8" fill="#fff"/>
      <circle cx="160" cy="88" r="8" fill="#fff"/>
      <circle cx="178" cy="128" r="8" fill="#fff"/>
      <circle cx="160" cy="168" r="8" fill="#fff"/>
      <circle cx="128" cy="186" r="8" fill="#fff"/>
      <circle cx="96" cy="168" r="8" fill="#fff"/>
      <circle cx="78" cy="128" r="8" fill="#fff"/>
      <circle cx="96" cy="88" r="8" fill="#fff"/>
    </svg>
  );
}
