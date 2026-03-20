import React from 'react'

export function FitnessIcon({ type, size = 24, color = 'currentColor', stroke = 1.9, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  }

  switch (type) {
    case 'strength':
      return (
        <svg {...common}>
          <path d="M3 10v4M6 8v8M18 8v8M21 10v4M6 12h12" />
        </svg>
      )
    case 'cardio':
      return (
        <svg {...common}>
          <path d="M20.5 8.5a4.5 4.5 0 0 0-6.4 0L12 10.6l-2.1-2.1a4.5 4.5 0 0 0-6.4 6.4L12 23l8.5-8.1a4.5 4.5 0 0 0 0-6.4Z" />
          <path d="M5.5 12.5h3l1.4-2.4 2.2 4.2 1.6-2.4h4.8" />
        </svg>
      )
    case 'combat':
      return (
        <svg {...common}>
          <path d="M12 3l7 3.6v6.2c0 4.8-2.8 8.1-7 9.7-4.2-1.6-7-4.9-7-9.7V6.6L12 3Z" />
          <path d="M9 12h6M10.2 9.6h3.6" />
        </svg>
      )
    case 'yoga':
      return (
        <svg {...common}>
          <circle cx="12" cy="6" r="2.2" />
          <path d="M12 8.5v4.2M6 14c1.2-1.9 2.7-2.9 4.5-2.9h3c1.8 0 3.3 1 4.5 2.9M7.6 19c1.5-1.2 2.9-1.8 4.4-1.8s2.9.6 4.4 1.8" />
        </svg>
      )
    case 'hiit':
      return (
        <svg {...common}>
          <path d="M13 2 5 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      )
    case 'performance':
      return (
        <svg {...common}>
          <path d="M4 15a8 8 0 1 1 16 0" />
          <path d="M12 11l4-4M12 15v.01M7.8 15v.01M16.2 15v.01" />
        </svg>
      )
    case 'personal':
      return (
        <svg {...common}>
          <circle cx="12" cy="7.3" r="3" />
          <path d="M5.5 21c.6-3.8 2.7-6 6.5-6s5.9 2.2 6.5 6M18 5.2l.8 1.5 1.6.2-1.2 1.1.3 1.6-1.5-.7-1.5.7.3-1.6-1.2-1.1 1.6-.2z" />
        </svg>
      )
    case 'cycling':
      return (
        <svg {...common}>
          <circle cx="6.5" cy="17.5" r="3.5" />
          <circle cx="17.5" cy="17.5" r="3.5" />
          <path d="M9.5 17.5h3l-2.6-5.5h3.8l1.5 3h2.8M9.2 12H6.8" />
        </svg>
      )
    case 'recovery':
      return (
        <svg {...common}>
          <path d="M14.5 4.2a6.8 6.8 0 1 0 5.3 10.9 6.8 6.8 0 0 1-5.3-10.9Z" />
          <path d="M7.2 7.2v2.8M5.8 8.6H8.6" />
        </svg>
      )
    case 'conditioning':
      return (
        <svg {...common}>
          <path d="M5 19 9 8l3 11 3-8 4 8" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      )
  }
}

export function SocialIcon({ type, size = 16, color = 'currentColor', className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  }

  switch (type) {
    case 'facebook':
      return (
        <svg {...common}>
          <path d="M14 8h2V4h-2c-2.8 0-4 1.7-4 4v2H8v4h2v6h4v-6h2.4l.6-4H14V8c0-.6.2-1 1-1Z" />
        </svg>
      )
    case 'twitter':
      return (
        <svg {...common}>
          <path d="m3 3 18 18M21 3l-7 8 7 10h-4l-5-7-6 7H3l7-8-7-10h4l5 7 6-7z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...common}>
          <path d="M7 9v11M7 6.5v.01M12 20v-6.2c0-2.4 1.2-3.8 3.3-3.8S19 11.4 19 14v6" />
          <rect x="4" y="4" width="16" height="16" rx="2.5" />
        </svg>
      )
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="3.6" />
          <path d="M17.2 6.8h.01" />
        </svg>
      )
    case 'youtube':
      return (
        <svg {...common}>
          <path d="M3.5 8.2c0-1.8 1.4-3.2 3.2-3.2h10.6c1.8 0 3.2 1.4 3.2 3.2v7.6c0 1.8-1.4 3.2-3.2 3.2H6.7c-1.8 0-3.2-1.4-3.2-3.2Z" />
          <path d="m10 9 5 3-5 3z" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      )
  }
}

export function ContactIcon({ type, size = 16, color = 'currentColor', className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: 1.9,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  }

  switch (type) {
    case 'address':
      return (
        <svg {...common}>
          <path d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z" />
          <circle cx="12" cy="11" r="2.3" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path d="M5.5 4.8h3l1.2 3.8-1.7 1.7a15.2 15.2 0 0 0 5.7 5.7l1.7-1.7 3.8 1.2v3c0 1-.8 1.8-1.8 1.8A15.4 15.4 0 0 1 3.7 6.6c0-1 .8-1.8 1.8-1.8Z" />
        </svg>
      )
    case 'email':
      return (
        <svg {...common}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path d="m4.5 7 7.5 6 7.5-6" />
        </svg>
      )
    case 'hours':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.8 2" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      )
  }
}
