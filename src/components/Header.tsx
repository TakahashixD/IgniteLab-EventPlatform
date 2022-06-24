import { Logo } from "./Logo";
import { List } from "phosphor-react";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="w-full p-6 flex items-center lg:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />

      <nav className="lg:hidden">
        <a
          href="#"
          className="absolute top-6 right-0"
          onClick={onToggleSidebar}
        >
          <List size={32} className="text-blue-500" />
        </a>
      </nav>
    </header>
  );
}
