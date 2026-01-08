# Feature Specification: Light and Dark Theme Implementation

The goal is to implement a robust theme system with Light and Dark modes, ensuring high accessibility and visual consistency across all UI components.

## User Stories

### User Story 1 - Toggle Theme
**Acceptance Scenarios**:
1. **Given** the application is open, **When** the user clicks the theme toggle button, **Then** the application switches between Light and Dark themes.
2. **Given** the user has a system preference for dark mode, **When** the application loads for the first time, **Then** it should default to the Dark theme.

### User Story 2 - Consistent Branding in Light Theme
**Acceptance Scenarios**:
1. **Given** the Light theme is active, **When** viewing the dashboard, **Then** the background should be #FBF9F4, secondary elements should use #EBDEC9, primary text should be #534F4E, and accents should use #DC291C.
2. **Given** the Light theme is active, **When** interacting with components, **Then** all interactive elements (buttons, links, inputs) must maintain a contrast ratio of at least 4.5:1 for normal text.

---

## Requirements
- **Theme Support**: Implement both Light and Dark themes using CSS variables and a theme provider (`next-themes`).
- **Color Palette (Light)**:
  - Background Primary: `#FBF9F4`
  - Background Secondary: `#EBDEC9`
  - Text Primary: `#534F4E`
  - Accent/Primary Action: `#DC291C`
- **Color Palette (Dark)**:
  - Retain existing dark theme but adjust for contrast if necessary.
- **Accessibility**: All text/background combinations must meet WCAG AA standards (4.5:1 contrast ratio for normal text).
- **Component Synchronization**: All shadcn/ui components and custom components must correctly inherit theme variables.
- **Persistence**: The user's theme preference must be persisted (e.g., in localStorage).

## Success Criteria
- Users can switch between themes without page reload.
- The UI is visually pleasing and accessible in both modes.
- No components are "broken" or unreadable in either mode (e.g., dark text on dark background).
- The light theme uses the specific colors: `#EBDEC9`, `#DC291C`, `#534F4E`.
