# Technical Specification: Theme Implementation Refinement

## Technical Context
- **Framework**: React
- **Styling**: Tailwind CSS with shadcn/ui variables
- **Theme Management**: `next-themes`
- **Configuration**: `tailwind.config.js` and `src/index.css`

## Technical Implementation Brief
The implementation involves updating the CSS variables in `index.css` to precisely match the branding colors provided. We will ensure that both Light and Dark themes share a consistent HSL-based structure that works seamlessly with Tailwind CSS.

### Key Variables (Light Theme)
- `--background`: `43 38% 97%` (#FBF9F4)
- `--foreground`: `12 3% 32%` (#534F4E)
- `--primary`: `4 77% 49%` (#DC291C)
- `--secondary`: `37 45% 85%` (#EBDEC9)
- `--muted`: `37 20% 90%` (Derived for subtle contrast)
- `--accent`: `4 77% 49%` (Using primary for consistency)
- `--border`: `37 20% 80%` (Adjusted for visibility)

### Key Variables (Dark Theme)
- Retain current values but verify contrast for `--foreground` against `--background`.
- Ensure `--primary` matches `#DC291C` (it already does: `4 73% 49%`).

## Source Code Structure
- `frontend/src/index.css`: Definition of CSS variables for `:root` (dark) and `.light`.
- `frontend/tailwind.config.js`: Tailwind theme extension using HSL variables.

## Contracts
- No API changes.
- CSS Variable Contract: All components should use standard Tailwind classes (e.g., `bg-background`, `text-primary`) to ensure theme compliance.

## Delivery Phases
1. **Phase 1: Variable Update**: Update `index.css` with exact HSL values.
2. **Phase 2: Visual Verification**: Use the browser to check component rendering in both modes.
3. **Phase 3: Component Audit**: Briefly check key components (App.js, dashboard elements) to ensure they use theme classes.

## Verification Strategy
- **Visual Inspection**: Run the dev server and toggle themes.
- **Contrast Check**: Verify contrast ratios using browser dev tools or manual calculation.
- **Linting**: Run `npm run lint` (if available) to ensure no style regressions.
