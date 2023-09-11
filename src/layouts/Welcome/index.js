import React from "react";
import Banner1 from "./Banner1";
import HeaderSection from "./Header";
import FooterSection from "./FooterSection";
import Banner3 from "./Banner3";
import JustForYou from "./JustForYou";
import SpecialOfferForYou from "./SpecialOfferForYou";
import BrandCollection from "./BrandCollection";
import Banner0 from "./Banner0";
import Collection from "./Collection";
import Banner5 from "./Banner5";
import Banner6 from "./Banner6";
import { Link } from "react-scroll";
import "../../assets/css/styles.css";

function Welcome() {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  console.log("23", isVisible);
  return (
    <div className="relative bg-gray-900">
      <HeaderSection />
      <main className="isolate">
        <Banner0 />
        <Banner1 />
        <BrandCollection />
        <Collection />
        <Banner3 />
        <SpecialOfferForYou />
        <JustForYou />
        <Banner5 />
        <Banner6 />
      </main>
      <FooterSection />

      <div
        className={` animate-bounce shadow-lg rounded-full scroll-to-top-button ${
          isVisible ? "visible" : ""
        }`}
      >
        <div onClick={scrollToTop}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            class="h-4 w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
