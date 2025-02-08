import React from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <div className="top-section">
        <nav className="navbar navbar-expand-lg navbar-dark px-5">
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
                  className="link-color text-decoration-none py-2 px-3"
                  to="#"
                >
                  About us
                </Link>
                <Link
                  className="link-color text-decoration-none py-2 px-3 "
                  to="#"
                >
                  Services
                </Link>
                <Link
                  className="link-color text-decoration-none py-2 px-3 "
                  to="#"
                >
                  Careers
                </Link>
                <Link
                  className="link-color text-decoration-none py-2 px-3 "
                  to="#"
                >
                  Blog
                </Link>
                <div className="bg-white button-border px-4 p-2">
                  <Link
                    className="link-color text-decoration-none py-2 px-3 "
                    to="#"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="text-overlay ">
          <h1 className="text-white fw-bold pb-0 mb-0">
            Full Comprehensive HR Solutions{" "}
          </h1>
          <h2 className="text-Turquoise fw-bold pt-0 mt-0 mb-4">
            Tailored to your business needs
          </h2>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <button
              type="submit"
              class="border-0 py-2 px-4 me-3 button-border bg-Curious-Blue text-white"
            >
              Contact us
            </button>
            <button
              type="submit"
              class="border-Turquoise py-2 px-4 me-3 link-color button-border bg-white"
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
