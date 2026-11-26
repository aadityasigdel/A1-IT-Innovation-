// The same build serves www (marketing site) and portal.a1itinnovation.com.np (intern portal + admin).
// Local test of the portal: VITE_PORTAL=1 npm run dev
export const isPortalHost = () =>
  import.meta.env.VITE_PORTAL === "1" || window.location.hostname.startsWith("portal.");
