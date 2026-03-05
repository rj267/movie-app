import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [showBtn, setShowBtn] = useState<boolean>(false);

  useEffect(() => {
    // scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // initialize
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {children}

      {/* Scroll to top button */}
      <button
        aria-label="Scroll to top"
        onClick={handleClick}
        className={
          `fixed z-50 right-6 bottom-6 p-3 rounded-full shadow-lg transition-transform duration-200 ` +
          (showBtn
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-6 opacity-0 scale-75 pointer-events-none") +
          " bg-red-600 text-white hover:bg-red-700"
        }
        style={{ boxShadow: "0 6px 18px rgba(0,0,0,0.25)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M12 19V6" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
};

export default ScrollToTop;
