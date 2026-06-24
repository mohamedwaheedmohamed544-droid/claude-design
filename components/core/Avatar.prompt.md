User/entity avatar with auto-initials, consistent color seeding, and status indicator.

```jsx
<Avatar name="Mohammed Al-Rashid" size="md" />
<Avatar name="Sara Ahmed" src="/photos/sara.jpg" status="online" />
<Avatar name="PurePay" shape="square" size="lg" />
<Avatar size="sm" status="busy" />
```

**Sizes**: xs (24px) · sm (32px) · md (40px, default) · lg (48px) · xl (64px)

**Color seeding**: background color is deterministically derived from the `name` string, using brand accent colors. Same name always gets the same color.

**Status dots**: online (teal), offline (gray), busy (coral), away (amber)

For Arabic names, initials are extracted correctly from right-to-left names.
