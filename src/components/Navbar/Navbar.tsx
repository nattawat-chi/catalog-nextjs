import { DarkMode } from "./DarkMode";
import NavbarMenu from "./NavbarMenu";
import Logo from "./Logo";
import { DrawerDemo } from "../Drawer";
import LoginMenu from "./LoginMenu";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b">
      <div
        className="container flex flex-col md:flex-row sm:flex-row justify-between py-4
           gap-4"
      >
        {/* Logo */}
        <div className="flex md:flex-row flex-col items-center  gap-6 px-4 py-2">
          <Logo />
          <NavbarMenu />
        </div>

        {/* DarkMode & Profile */}
        <div className="flex md:flex-row justify-center items-center gap-4 px-4">
          <DarkMode />
          <DrawerDemo />
          <LoginMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
