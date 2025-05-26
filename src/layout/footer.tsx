import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Youtube,
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { IMAGES } from "@/utils/image";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex flex-row items-center gap-2 font-medium">
              <Link href="/" className="flex items-center">
                <Image
                  src={IMAGES.LOGO}
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className="w-full h-10"
                />
              </Link>
              <div>In Ảnh Trực Tuyến</div>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Facebook size={20} className="text-white" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Twitter size={20} className="text-white" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Youtube size={20} className="text-white" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <MessageCircle size={20} className="text-white" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Customer Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shipping Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Products Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Gift Card Balance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              More From Rubix
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Rubix
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our Guarantees
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Delivery & Return
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Lets Talk</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <span>+391 (0)35 2568 4593</span>
              </div>
              <div>
                <Link
                  href="mailto:hello@domain.com"
                  className="hover:text-white transition-colors"
                >
                  hello@domain.com
                </Link>
              </div>

              <div className="pt-4">
                <h4 className="text-white font-semibold mb-3">Find Us</h4>
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <div>
                    <div>502 New Design Str</div>
                    <div>Melbourne, Australia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm">
              Copyright © <span className="text-white">Rubix</span> all rights
              reserved. Powered by{" "}
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Bluesky Team
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded px-3 py-2">
                <span className="text-blue-600 font-bold text-sm">VISA</span>
              </div>
              <div className="bg-blue-600 rounded px-3 py-2">
                <span className="text-white font-bold text-xs">
                  AMERICAN EXPRESS
                </span>
              </div>
              <div className="bg-blue-500 rounded px-3 py-2">
                <span className="text-white font-bold text-sm">PayPal</span>
              </div>
              <div className="bg-yellow-400 rounded px-3 py-2">
                <span className="text-blue-900 font-bold text-sm">ebay</span>
              </div>
              <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full -ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
