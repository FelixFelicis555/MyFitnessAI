const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconLogo(props) {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" {...props}>
      <circle cx="16" cy="16" r="16" fill="#F2703C" />
      <path
        d="M16 8c-1.2 0-2.2.9-2.4 2.1-1.7.5-2.9 2-2.9 3.9 0 2.2 1.9 4 4.2 4h2.2c2.3 0 4.2-1.8 4.2-4 0-1.9-1.2-3.4-2.9-3.9C18.2 8.9 17.2 8 16 8z"
        fill="#fff"
      />
      <circle cx="13.6" cy="14.2" r="0.9" fill="#F2703C" />
      <circle cx="18.4" cy="14.2" r="0.9" fill="#F2703C" />
      <path d="M14.3 16.6c.5.5 1 .8 1.7.8s1.2-.3 1.7-.8" stroke="#F2703C" strokeWidth="1" strokeLinecap="round" fill="none" />
      <path d="M11 12l-1.3-2M21 12l1.3-2M13 9.3 12 7M19 9.3 20 7" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function IconSparkle(props) {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" {...props}>
      <path d="M10 1.5c.35 2.9 1 4.9 2 6.1s3.2 1.8 6 2.4c-2.8.6-4.9 1.3-6 2.4-1 1.2-1.65 3.2-2 6.1-.35-2.9-1-4.9-2-6.1-1.1-1.1-3.2-1.8-6-2.4 2.8-.6 4.9-1.3 6-2.4 1-1.2 1.65-3.2 2-6.1z" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <span
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-500 text-white"
      {...props}
    >
      <svg viewBox="0 0 14 14" width="9" height="9" {...base} stroke="white" strokeWidth={2.4}>
        <path d="M2.5 7.3 5.4 10 11.5 3.6" />
      </svg>
    </span>
  )
}

export function IconStar(props) {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="#FFB020" {...props}>
      <path d="M10 1.2l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z" />
    </svg>
  )
}

export function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function IconArrow(props) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" {...base} {...props}>
      <path d="M3.5 8h9M8.5 4l4 4-4 4" />
    </svg>
  )
}

export function IconFootprints(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
      <path d="M9 5c1.4 0 2.3 1.4 2.3 3.4 0 1.6-.5 2.6-.5 4 0 1.6 1 2.1 1 3.6a2.4 2.4 0 0 1-2.4 2.4A2.6 2.6 0 0 1 6.8 16c0-2 .7-2.6.7-5 0-1.7-.4-2.7-.4-4A2.4 2.4 0 0 1 9 5Z" />
      <path d="M16 10c1.4 0 2.3 1.4 2.3 3.4 0 1.6-.5 2.6-.5 4 0 1.6 1 1.7 1 3.2A2.4 2.4 0 0 1 16.4 23a2.6 2.6 0 0 1-2.6-2.6c0-2 .7-3.1.7-5.5 0-1.7-.4-2.2-.4-3.5A2.4 2.4 0 0 1 16 10Z" />
    </svg>
  )
}

export function IconDroplet(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
    </svg>
  )
}

export function IconScale(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="13" r="3.4" />
      <path d="M12 9.6V8M9 6l1-1.6M15 6l-1-1.6" />
    </svg>
  )
}

export function IconBell(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <path d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  )
}

export function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-3.9 3.6-7 8-7s8 3.1 8 7" />
    </svg>
  )
}

export function IconHome(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
      <path d="M4 11.5 12 5l8 6.5" />
      <path d="M6 10v9h12v-9" />
    </svg>
  )
}

export function IconReports(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
      <path d="M5 20V10M12 20V4M19 20v-7" />
    </svg>
  )
}

export function IconPlus(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} strokeWidth={2.4} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function IconActivity(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
      <path d="M3 12h4l2 7 4-14 2 7h6" />
    </svg>
  )
}

export function IconEgg(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M12 22c4.4 0 7.5-3.3 7.5-8 0-6-4-12-7.5-12S4.5 8 4.5 14c0 4.7 3.1 8 7.5 8Z" />
    </svg>
  )
}

export function IconBowl(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M3 11h18a9 8 0 0 1-18 0Z" />
      <path d="M12 11V6M9 8l1.5-2.5M15 8l-1.5-2.5" />
    </svg>
  )
}

export function IconCamera(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M4 8h3l1.6-2h6.8L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.4" />
    </svg>
  )
}

export function IconTarget(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  )
}

export function IconMeal(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <path d="M6 3v7a2 2 0 0 0 4 0V3M8 10v11M18 3c-2 0-3 2.5-3 5.5S16 13 18 13s3-1.9 3-4.5S20 3 18 3ZM18 13v8" />
    </svg>
  )
}

export function IconChat(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
      <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.4A7.96 7.96 0 0 1 4 12Z" />
    </svg>
  )
}

export function IconPlayStore(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...props}>
      <path d="M4.5 2.5c-.4.4-.6.9-.6 1.5v16c0 .6.2 1.1.6 1.5l9.4-9.5-9.4-9.5Z" fill="#00E1FF" />
      <path d="M17.6 9.9l-3-1.8-9-5.4c-.2 0-.4.1-.5.2l9 8.9 3.5-3.9Z" fill="#00F076" />
      <path d="M4.1 20.3c.1.1.3.2.5.2l9-5.4 3-1.8-3.5-3.5-9 10.5Z" fill="#FF3A44" />
      <path d="M17.6 9.9l-3.5 3.9 3.5 3.5 3.7-2.2c1-.6 1-1.7 0-2.3l-3.7-2.9Z" fill="#FFCE00" />
    </svg>
  )
}

export function IconApple(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.2 1-4.1 2.5-1.7 3-.4 7.5 1.2 10 .8 1.2 1.8 2.5 3 2.5s1.6-.8 3-.8 1.8.8 3.1.8 2.1-1.2 2.9-2.4c.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.9-1.1-2.9-4.9ZM13.9 5.1c.7-.9 1.2-2.1 1-3.3-1 .1-2.3.7-3 1.6-.7.7-1.3 1.9-1.1 3.1 1.2.1 2.4-.6 3.1-1.4Z" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M6.6 3.5h2.4l1.3 4-2 1.2a11.3 11.3 0 0 0 5 5l1.2-2 4 1.3v2.4c0 1.1-.9 2-2 1.9-4-.3-7.8-2.1-10.6-4.9C3 9.7 1.2 5.9 1 1.9 0.9.8 1.8-.1 2.9 0h2.4Z" />
    </svg>
  )
}

export function IconMapPin(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  )
}

export function IconSend(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
      <path d="M21 3 3 10.5l7.5 3L13.5 21 21 3Z" />
      <path d="M10.5 13.5 21 3" />
    </svg>
  )
}
