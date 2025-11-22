import HeaderIcons from "./HeaderIcons";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="py-4 mx-8 border-b-[1px] border-coffee-300">
      <div className="flex justify-between items-center">
        <Logo />
        <Navigation />
        <HeaderIcons />
      </div>
    </header>
  );
}

export default Header;
