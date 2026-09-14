export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavigationProps {
  items?: NavItem[];
  currentPath?: string;
  className?: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items?: NavItem[];
}
