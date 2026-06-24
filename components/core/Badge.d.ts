/**
 * Badge — small status / label chip.
 * Use for status indicators, counts, tags, and category labels.
 *
 * @example
 * ```jsx
 * <Badge variant="success" dot>Active</Badge>
 * <Badge variant="warning">Pending</Badge>
 * <Badge variant="danger">Failed</Badge>
 * <Badge variant="primary">New</Badge>
 * ```
 */
export interface BadgeProps {
  /** Color treatment */
  variant?: 'default' | 'primary' | 'blue' | 'success' | 'warning' | 'danger' | 'outline';
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  /** Prepend a status dot */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
