import Link from 'next/link';

interface NavigationProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

function Navigation({ mobile = false, onLinkClick }: NavigationProps) {
  if (mobile) {
    return (
      <nav>
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              className="hover:bg-coffee-100 hover:text-coffee-600 block rounded-lg px-4 py-3 transition-colors"
              href="/shop"
              onClick={onLinkClick}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-coffee-100 hover:text-coffee-600 block rounded-lg px-4 py-3 transition-colors"
              href="/our-story"
              onClick={onLinkClick}
            >
              Our Story
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-coffee-100 hover:text-coffee-600 block rounded-lg px-4 py-3 transition-colors"
              href="/contact"
              onClick={onLinkClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav>
      <ul className="flex items-center justify-between gap-7 font-medium">
        <li>
          <Link className="hover:text-coffee-600 transition-colors" href="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link className="hover:text-coffee-600 transition-colors" href="/our-story">
            Our Story
          </Link>
        </li>
        <li>
          <Link className="hover:text-coffee-600 transition-colors" href="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
