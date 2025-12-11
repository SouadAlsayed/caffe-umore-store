import { Heart, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';
import IconCircle from './IconCircle';

interface HeaderIconsProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

function HeaderIcons({ mobile = false, onLinkClick }: HeaderIconsProps) {
  if (mobile) {
    return (
      <div className="space-y-4">
        <Link
          href="/profile"
          className="hover:bg-coffee-100 flex items-center gap-4 rounded-lg p-3 transition-colors"
          onClick={onLinkClick}
        >
          <IconCircle>
            <User size={24} />
          </IconCircle>
          <span className="font-medium">Profile</span>
        </Link>

        <Link
          href="/wishlist"
          className="hover:bg-coffee-100 flex items-center gap-4 rounded-lg p-3 transition-colors"
          onClick={onLinkClick}
        >
          <IconCircle>
            <Heart size={24} className="hover:text-color-red" />
          </IconCircle>
          <span className="font-medium">Wishlist</span>
        </Link>

        <Link
          href="/cart"
          className="hover:bg-coffee-100 flex items-center gap-4 rounded-lg p-3 transition-colors"
          onClick={onLinkClick}
        >
          <IconCircle>
            <ShoppingBag size={24} />
          </IconCircle>
          <span className="font-medium">Cart</span>
        </Link>
      </div>
    );
  }

  return (
    <ul className="flex items-center justify-between gap-5">
      <li>
        <Link href="/profile">
          <IconCircle>
            <User className="h-5 w-5" />
          </IconCircle>
        </Link>
      </li>

      <li>
        <Link href="/wishlist">
          <IconCircle>
            <Heart className="hover:text-error-text h-5 w-5" />
          </IconCircle>
        </Link>
      </li>

      <li>
        <Link href="/cart">
          <IconCircle>
            <ShoppingBag className="h-5 w-5" />
          </IconCircle>
        </Link>
      </li>
    </ul>
  );
}

export default HeaderIcons;
