import Link from "next/link";

function Navigation() {
  return (
    <ul className="flex justify-between items-center gap-5 text-sm">
      <Link className="hover:text-coffee-600" href="">
        Shop
      </Link>
      <Link className="hover:text-coffee-600" href="">
        Our Story
      </Link>
      <Link className="hover:text-coffee-600" href="">
        Contact Us
      </Link>
    </ul>
  );
}

export default Navigation;
