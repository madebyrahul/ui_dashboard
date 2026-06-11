Handled in a single `Sidebar.tsx` component using Tailwind breakpoints — no separate mobile component needed.

## Challenges

- **Dynamic Lucide icons from string** — Supabase stores `icon_name` as a string. Used `icons` object exported from `lucide-react` to map string → component at runtime.
- **Framer Motion bar chart** — percentage-based heights fail inside flex containers. Fixed by using `px` values calculated from `maxHours`.
- **Three breakpoints in one Sidebar** — used `hidden md:flex` and `flex md:hidden` to handle desktop/tablet/mobile in a single component.


## Deployment

Deployed on Vercel. Environment variables added via Vercel project settings.