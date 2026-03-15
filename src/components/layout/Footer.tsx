import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/products" },
    { name: "Why Us", href: "/#why-us" },
  ];

  const productsList = [
    "Organic Jaggery",
    "Pure Desi Ghee",
    "Sesame Seeds (Til)",
    "Groundnut Oil",
    "Premium Peanuts",
    "Fresh Fruits",
    "Moong (Green Gram)",
    "Urad (Black Gram)",
    "Gehu (Wheat)",
    "Fresh Vegetables",
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Sant Krupa Exports"
              className="h-16 w-16 object-contain"
            />
            <h3 className="text-xl font-bold">Sant Krupa Exports</h3>
            <p className="text-secondary-foreground/80 text-sm">
              Leading exporter of premium quality agricultural products to
              markets worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {productsList.map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a
                  href="mailto:santkrupaexporters@gmail.com"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  santkrupaexporters@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <a
                  href="tel:+919023272288"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  +91 90232 72288
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-secondary-foreground/80 text-sm">
                  Gujarat, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} Sant Krupa Exports. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/sant-krupa-exports-35439a399?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/santkrupaexports?utm_source=qr&igsh=MTB0NGFzdGxxYnJxYQ==",
                },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-secondary-foreground/60 hover:text-primary transition-colors"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
