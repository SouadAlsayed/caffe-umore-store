import { Heart, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import IconCircle from "./IconCircle";

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
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-coffee-100 transition-colors"
          onClick={onLinkClick}
        >
          <IconCircle>
            <User size={24} />
          </IconCircle>
          <span className="font-medium">Profile</span>
        </Link>

        <Link
          href="/wishlist"
          className="flex items-center gap-4 p-3 rounded-lg  hover:bg-coffee-100 transition-colors"
          onClick={onLinkClick}
        >
          <IconCircle>
            <Heart size={24} className=" hover:text-color-red" />
          </IconCircle>
          <span className="font-medium">Wishlist</span>
        </Link>

        <Link
          href="/cart"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-coffee-100 transition-colors"
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
    <ul className="flex justify-between items-center gap-5">
      <li>
        <Link href="/profile">
          <IconCircle>
            <User className="w-5 h-5" />
          </IconCircle>
        </Link>
      </li>

      <li>
        <Link href="/wishlist">
          <IconCircle>
            <Heart className="w-5 h-5 hover:text-error-text" />
          </IconCircle>
        </Link>
      </li>

      <li>
        <Link href="/cart">
          <IconCircle>
            <ShoppingBag className="w-5 h-5" />
          </IconCircle>
        </Link>
      </li>
    </ul>
  );
}

export default HeaderIcons;
