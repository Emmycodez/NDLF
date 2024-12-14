import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              New Life Dream Foundation
            </h3>
            <p className="text-sm text-gray-400">
              Empowering individuals to rebuild their lives and achieve their
              dreams.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-400">
              123 Hope Street
              <br />
              Anytown, ST 12345
              <br />
              (123) 456-7890
              <br />
              info@newlifedream.org
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} New Life Dream Foundation. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
