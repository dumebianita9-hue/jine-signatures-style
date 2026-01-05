import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const collections = [
  { name: "Men's Suits", path: "/collections?category=mens-suits" },
  { name: "Women's Couture", path: "/collections?category=womens-couture" },
  { name: "Accessories", path: "/collections?category=accessories" },
  { name: "Custom Tailoring", path: "/custom-sewing" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-soft-black text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Jine Signatures" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-6 text-primary-foreground/70 font-body text-sm leading-relaxed">
              Crafting timeless elegance through exceptional tailoring and premium fabrics. 
              Where luxury meets personal expression.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 font-body text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-display text-lg mb-6">Collections</h4>
            <ul className="space-y-4">
              {collections.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 font-body text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70 font-body text-sm">
                  123 Fashion Avenue, Suite 500<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-primary-foreground/70 font-body text-sm hover:text-accent transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:hello@jinesignatures.com"
                  className="text-primary-foreground/70 font-body text-sm hover:text-accent transition-colors duration-300"
                >
                  hello@jinesignatures.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 font-body text-sm">
              © {new Date().getFullYear()} Jine Signatures. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-primary-foreground/50 font-body text-sm hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/50 font-body text-sm hover:text-accent transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
