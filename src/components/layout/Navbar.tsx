import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-transparent.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Collections", path: "/collections" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const cartItemCount = 3; // This would come from cart state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img src={logo} alt="Jine Signatures" className="h-12 md:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    "nav-link font-body text-sm tracking-wider uppercase",
                    location.pathname === link.path && "text-foreground after:scale-x-100"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="font-body text-sm tracking-wider uppercase">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/cart" className="relative group">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-elegant overflow-hidden transition-all duration-500",
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container mx-auto px-6 py-8">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      "block font-body text-lg tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors duration-300",
                      location.pathname === link.path && "text-accent"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
              <Link to="/login" className="flex-1">
                <Button variant="luxury-outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/cart" className="relative">
                <Button variant="luxury" size="icon" className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
