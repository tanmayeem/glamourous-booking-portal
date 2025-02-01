import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-glamour-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">GlamConnect</h3>
            <p className="font-sans text-sm text-white/60">
              Connecting beauty enthusiasts with elite makeup artists.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-sans text-sm text-white/60 hover:text-white transition-colors">
                  Find Artists
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-white/60 hover:text-white transition-colors">
                  Masterclasses
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-white/60 hover:text-white transition-colors">
                  Join as Artist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-sans text-sm text-white/60 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-white/60 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="font-sans text-sm text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="font-sans text-sm text-white/60 text-center">
            © {new Date().getFullYear()} GlamConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;