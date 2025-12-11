import Link from 'next/link';
import { Bodoni_Moda } from 'next/font/google';

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

export default function Footer() {
  return (
    <footer className="bg-coffee-900 px-6 py-14 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
        {/* Logo */}
        <div>
          <h2 className={`${bodoniModa.className} text-3xl font-semibold text-white`}>
            Caffè Umore
          </h2>
          <p className="mt-4 leading-relaxed text-gray-400">
            Your daily escape into premium coffee and warm experiences. Crafted with passion, served
            with quality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/categories/regular" className="hover:text-white">
                Regular Coffee
              </Link>
            </li>
            <li>
              <Link href="/categories/espresso" className="hover:text-white">
                Espresso
              </Link>
            </li>
            <li>
              <Link href="/categories/italian" className="hover:text-white">
                Italian
              </Link>
            </li>
            <li>
              <Link href="/categories/milk" className="hover:text-white">
                Milk Based
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📍 Cairo, Egypt</li>
            <li>📞 +20 123 456 7890</li>
            <li>✉️ info@caffeumore.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Caffè Umore. All rights reserved.
      </div>
    </footer>
  );
}
