Primary action button. Use for all CTA, submit, and triggered actions.

```jsx
<Button variant="primary" size="md">Get started</Button>
<Button variant="outline" size="sm" iconLeft="←">Back</Button>
<Button variant="danger" size="md">Delete account</Button>
<Button variant="secondary" loading>Saving…</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

**Variants**
- `primary` — deep navy, main CTA (default)
- `secondary` — sky blue, secondary actions
- `outline` — bordered navy, tertiary/back actions
- `ghost` — transparent, inline or low-priority
- `danger` — coral, destructive actions

**Sizes**
- `sm` — 32px, tight UIs, table rows
- `md` — 40px, default (most forms + pages)
- `lg` — 48px, hero sections, onboarding

**Notes**: always sentence-case labels ("Get started", not "GET STARTED"). Never use emoji.
