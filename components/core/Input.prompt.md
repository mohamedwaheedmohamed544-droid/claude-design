Single-line text input. Supports label, hint, error, icons, and sizes.

```jsx
<Input label="Email address" type="email" placeholder="you@example.com" required />
<Input label="Amount (SAR)" size="lg" iconLeft="﷼" hint="Minimum 10 SAR" />
<Input label="Phone" error="Please enter a valid phone number" />
<Input label="Search" iconLeft="🔍" placeholder="Search transactions…" />
```

**Sizes**: sm (32px) · md (40px, default) · lg (48px)

Focus state shows blue border + focus ring. Error state shows coral border + error message. Always include a `label` for accessibility — never just use `placeholder` as a label.

For RTL layouts, the `dir` attribute on the parent container flips icon positions automatically.
