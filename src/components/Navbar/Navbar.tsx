import { DarkMode } from "./DarkMode";
import NavbarMenu from "./NavbarMenu";
import Logo from "./Logo";
import { DrawerDemo } from "../Drawer";
import LoginMenu from "./LoginMenu";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b">
      <div
        className="container flex flex-col justify-between py-4
          sm:flex-row sm:items-center gap-4"
      >
        {/* Logo */}
        <div className="flex items-center gap-6 px-4 py-2">
          <Logo />
          <NavbarMenu />
        </div>

        {/* DarkMode & Profile */}
        <div className="flex items-center gap-4 px-4">
          <DarkMode />
          <DrawerDemo />
          <LoginMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
