import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-muted/30 backdrop-blur-md border-t">
      <div className="container pt-12 md:pt-16 pb-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="font-semibold text-xl text-foreground mb-4">
              AllureMart
            </h3>
            <p className="text-sm text-muted-foreground">
              Modern. Simple. Sustainable.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  href="/products"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  href="/products?category=furniture"
                >
                  Furniture
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  href="/products?category=kitchen-accessories"
                >
                  Kitchen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  href="/terms"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <Link
                href="https://facebook.com"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AllureMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
