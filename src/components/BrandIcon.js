import * as si from "simple-icons";

// Renders a brand logo from simple-icons (official brand paths & colours).
export default function BrandIcon({ name, className = "size-6", color = true, title }) {
  const icon = si[name];
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <path d={icon.path} fill={color ? `#${icon.hex}` : "currentColor"} />
    </svg>
  );
}
