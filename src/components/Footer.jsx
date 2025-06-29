import { Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-8 pb-4  text-center text-sm text-gray-600">
      <p className="mb-2">© {new Date().getFullYear()} Art by Claudia</p>

      <div className="flex gap-2 justify-center items-center">
        <p>Follow me on </p>
        <a
          href="https://www.instagram.com/claudiasafta_draw"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={18} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
