import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Send,
} from "lucide-react";

const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        {/* Left Section - Contact Info */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-gray-400" />
            <Link
              href="tel:+393352684593"
              className="hover:text-gray-300 transition-colors"
            >
              (+39) 35 2568 4593
            </Link>
          </div>

          <div className="hidden sm:block text-gray-600">|</div>

          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-gray-400" />
            <Link
              href="mailto:hello@domain.com"
              className="hover:text-gray-300 transition-colors"
            >
              hello@domain.com
            </Link>
          </div>
        </div>

        {/* Center Section - Promotion */}
        <div className="flex items-center space-x-3 text-sm">
          <span className="text-gray-300">
            Free shipping on all orders over $79
          </span>
          <Link
            href="/shop"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-1 rounded font-medium transition-colors"
          >
            Shop Now!
          </Link>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex items-center space-x-3">
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={16} />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={16} />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={16} />
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Pinterest"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <span className="text-xs font-bold">P</span>
            </div>
          </Link>
          <Link
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Send size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
