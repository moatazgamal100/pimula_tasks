import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const words = ["needs", "lorem", "goals"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const wordInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(wordInterval);
    };
  });

  return (
    <>
      <div className="top-section">
        {/* Video Background */}
        <iframe
          className="video-background"
          src="https://www.youtube.com/embed/Gwnj9NgFdPE?autoplay=1&loop=1&mute=1&playlist=Gwnj9NgFdPE&controls=0&showinfo=0&modestbranding=1"
          allow="autoplay; encrypted-media"
        ></iframe>

        {/* Navbar */}
        <nav
          className={`navbar navbar-expand-lg navbar-dark px-5 ${
            isScrolled ? "fixed-navbar bg-Cerulean" : ""
          }`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand w-50" to="#">
              <img src="/assets/logo.png" className="logo" alt="Logo" />
            </Link>
            <button
              className="navbar-toggler bg-Curious-Blue justify-content-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <div className="navbar-nav d-flex justify-content-center align-items-center">
                <Link
                  className={` ${
                    isScrolled ? "text-white" : "link-color"
                  } text-decoration-none py-2 px-3`}
                  to="#"
                >
                  About us
                </Link>
                <Link
                  className={` ${
                    isScrolled ? "text-white" : "link-color"
                  } text-decoration-none py-2 px-3`}
                  to="#"
                >
                  Services
                </Link>
                <Link
                  className={` ${
                    isScrolled ? "text-white" : "link-color"
                  } text-decoration-none py-2 px-3`}
                  to="#"
                >
                  Careers
                </Link>
                <Link
                  className={` ${
                    isScrolled ? "text-white" : "link-color"
                  } text-decoration-none py-2 px-3`}
                  to="#"
                >
                  Blog
                </Link>
                <div className="bg-white button-border px-4 p-2">
                  <Link
                    className="link-color text-decoration-none py-2 px-3"
                    to="#"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Text Overlay */}
        <div className="text-overlay">
          <h1 className="text-white fw-bold pb-0 mb-0">
            Full Comprehensive HR Solutions
          </h1>
          <h2 className="text-Turquoise fw-bold pt-0 mt-0 mb-4">
            Tailored to your{" "}
            <span className="word-container">
              <span className="word">{words[index]}</span>
            </span>
          </h2>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <button
              type="submit"
              className="border-0 py-2 px-4 me-3 button-border bg-Curious-Blue text-white button-hover"
            >
              Contact us
            </button>

            <button
              type="submit"
              className="border-Turquoise py-2 px-4 me-3 link-color button-border  bg-white button-hover"
            >
              Book A meeting
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
