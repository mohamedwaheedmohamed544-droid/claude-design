/**
 * Avatar — user/entity representation with initials fallback.
 *
 * @example
 * ```jsx
 * <Avatar name="Mohammed Al-Rashid" size="md" />
 * <Avatar name="Sara" src="/photos/sara.jpg" status="online" />
 * <Avatar name="System" shape="square" size="sm" />
 * ```
 */
export interface AvatarProps {
  /** Full name — used for initials and background color seeding */
  name?: string;
  /** Image URL — falls back to initials if missing or broken */
  src?: string;
  /** Size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Shape — circle (default), square (rounded), or squircle (less rounded) */
  shape?: 'circle' | 'square' | 'squircle';
  /** Presence / status dot */
  status?: 'online' | 'offline' | 'busy' | 'away';
  style?: React.CSSProperties;
}
