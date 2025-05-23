import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-muted px-6 py-10 text-sm text-muted-foreground">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-foreground mb-2">AllureMart</h3>
          <p className="text-sm">Modern. Simple. Sustainable.</p>
        </div>

        <div>
          <h4 className="font-medium mb-2">Shop</h4>
          <ul className="space-y-1">
            <li>
              <Link className="hover:underline" href="/products">
                All Products
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/categories/furniture">
                Furniture
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/categories/kitchen">
                Kitchen
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">About</h4>
          <ul className="space-y-1">
            <li>
              <Link className="hover:underline" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/terms">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="https://facebook.com">
              <FaFacebook className="w-6 h-6 hover:text-blue-600 transition-colors" />
            </Link>
            <Link href="https://instagram.com">
              <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter className="w-6 h-6 hover:text-sky-500 transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs">
        © {new Date().getFullYear()} AllureMart. Built with Next.js and Tailwind
        CSS.
      </div>
    </footer>
  );
}
export default Footer;
