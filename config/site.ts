export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "DatingAPP v0",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Dating",
      href: "/dating",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    }
  ],
  navMenuItems: [
    {
      label: "Dating",
      href: "/dating",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ]
};
