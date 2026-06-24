Surface container for grouped content. Foundation of all card-based layouts.

```jsx
// Basic card
<Card padding="md" shadow="md">
  <p>Content goes here</p>
</Card>

// Clickable / hoverable
<Card hoverable onClick={() => navigate('/tx/123')}>
  Transaction details
</Card>

// Bordered, no shadow
<Card bordered shadow="none" padding="sm">
  Subtle container
</Card>
```

**Padding**: none · sm · md (default) · lg
**Shadow**: none · sm · md (default) · lg
**Radius**: sm · md · lg (default) · xl · 2xl

For dark backgrounds, set `background="var(--color-navy-900)"`. Cards never have colored borders — use shadow or border for separation.
