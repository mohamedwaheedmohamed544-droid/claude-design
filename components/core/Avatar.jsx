import React from 'react';

const SIZES = {
  xs: { size: '24px', font: '9px', border: '1.5px' },
  sm: { size: '32px', font: '12px', border: '2px' },
  md: { size: '40px', font: '15px', border: '2px' },
  lg: { size: '48px', font: '18px', border: '2px' },
  xl: { size: '64px', font: '24px', border: '3px' },
};

const BG_COLORS = [
  'var(--color-navy-700)',
  'var(--color-blue-500)',
  'var(--color-teal-500)',
  'var(--color-amber-500)',
  'var(--color-coral-500)',
  'var(--color-navy-500)',
];

function getColorFromName(name) {
  if (!name) return BG_COLORS[0];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return BG_COLORS[Math.abs(hash) % BG_COLORS.length];
}

function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({
  name,
  src,
  size = 'md',
  shape = 'circle',
  status,
  style: extraStyle,
}) {
  const [imgError, setImgError] = React.useState(false);
  const s = SIZES[size] || SIZES.md;

  const containerStyle = {
    position: 'relative',
    display: 'inline-flex',
    flexShrink: 0,
    width: s.size,
    height: s.size,
    ...extraStyle,
  };

  const avatarStyle = {
    width: s.size,
    height: s.size,
    borderRadius: shape === 'circle' ? '50%' : shape === 'square' ? 'var(--radius-md)' : 'var(--radius-sm)',
    background: getColorFromName(name),
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: s.font,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--font-weight-medium)',
    overflow: 'hidden',
    border: `${s.border} solid rgba(255,255,255,0.15)`,
    flexShrink: 0,
    userSelect: 'none',
  };

  const STATUS_COLORS = {
    online: 'var(--color-teal-500)',
    offline: 'var(--color-gray-400)',
    busy: 'var(--color-coral-500)',
    away: 'var(--color-amber-500)',
  };

  const dotSize = parseInt(s.size) <= 32 ? '8px' : '10px';

  return React.createElement('div', { style: containerStyle },
    React.createElement('div', { style: avatarStyle },
      src && !imgError
        ? React.createElement('img', {
            src,
            alt: name || 'Avatar',
            style: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' },
            onError: () => setImgError(true),
          })
        : React.createElement('span', null, getInitials(name))
    ),
    status && React.createElement('span', {
      style: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        width: dotSize,
        height: dotSize,
        borderRadius: '50%',
        background: STATUS_COLORS[status] || STATUS_COLORS.offline,
        border: '2px solid white',
      }
    })
  );
}
