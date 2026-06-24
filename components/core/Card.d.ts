/**
 * Card — surface container for grouped content.
 * Use as the base for all panel, list item, and content block layouts.
 *
 * @example
 * ```jsx
 * <Card padding="md" shadow="md">
 *   <h3>Transaction</h3>
 *   <p>SAR 1,250.00</p>
 * </Card>
 *
 * <Card hoverable onClick={() => navigate('/details')}>
 *   Click to view
 * </Card>
 * ```
 */
export interface CardProps {
  /** Internal padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Corner radius */
  radius?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Shadow level */
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  /** Lifts on hover — use for clickable cards */
  hoverable?: boolean;
  /** Adds a 1px border */
  bordered?: boolean;
  /** Background color */
  background?: string;
  /** Click handler — implicitly sets cursor:pointer */
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
