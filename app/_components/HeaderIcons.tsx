import { Heart, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import IconCircle from "./IconCircle";

function HeaderIcons() {
  return (
    <ul className="flex justify-between items-center gap-5">
      <Link href="">
        <IconCircle>
          <User className="w-4 h-4" />
        </IconCircle>
      </Link>

      <Link href="">
        <IconCircle>
          <Heart className="w-4 h-4 hover:text-error-text" />
        </IconCircle>
      </Link>

      <Link href="">
        <IconCircle>
          <ShoppingBag className="w-4 h-4" />
        </IconCircle>
      </Link>
    </ul>
  );
}

export default HeaderIcons;
