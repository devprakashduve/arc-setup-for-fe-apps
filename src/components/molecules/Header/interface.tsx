// ResponsiveNavBar/interface.tsx

export interface HeaderProps {
  logoSrc: string
  navItems: MenuProps[]
}

export interface MenuProps {
  name: string
  link: string
}
