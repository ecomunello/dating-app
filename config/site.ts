export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "DatingAPP v0",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Incontri",
      href: "/dating",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    }
  ],
  navMenuItems: [
    {
      label: "Incontri",
      href: "/dating",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Logout",
      href: "/",
    },
  ]
};
