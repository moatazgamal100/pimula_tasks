import React from "react";

const Partners = () => {
  return (
    <>
      <div className="bg-nero">
        <div className="ps-5 py-4">
          <h2 className="text-white">Hear From Our Partners</h2>
        </div>
        <div
          id="customCarousel"
          className="carousel slide w-lg-75 mx-auto carousel-height"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators w-50 mx-auto">
            <button
              type="button"
              data-bs-target="#customCarousel"
              data-bs-slide-to="0"
              className="active rounded rounded-circle btn-carousel"
            ></button>
            <button
              type="button"
              data-bs-target="#customCarousel"
              data-bs-slide-to="1"
              className="rounded rounded-circle btn-carousel"
            ></button>
            <button
              type="button"
              data-bs-target="#customCarousel"
              data-bs-slide-to="2"
              className="rounded rounded-circle btn-carousel"
            ></button>
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner w-50 mx-auto bg-white rounded rounded-3 ">
            <div className="carousel-item p-4 active">
              <img
                src="/assets/Quote.png"
                className="d-block w-80px h-64px"
                alt="Slide 1"
              />
              <p className=" pt-3 carousal-p-small-screen">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris
              </p>
              <div className=" d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                  <h5 className="mb-0">Amal Khatean</h5>
                  <p className="text-Dark-Gray">Senior UI UX designer</p>
                </div>
                <img
                  src="/assets/Quote.png"
                  className="d-block w-80px h-64px"
                  alt="Slide 1"
                />
              </div>
            </div>
            <div className="carousel-item  p-4">
              <img
                src="/assets/Quote.png"
                className="d-block w-80px h-64px"
                alt="Slide 1"
              />
              <p className=" pt-3 carousal-p-small-screen">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris
              </p>
              <div className=" d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                  <h5 className="mb-0">Amal Khatean</h5>
                  <p className="text-Dark-Gray">Senior UI UX designer</p>
                </div>
                <img
                  src="/assets/Quote.png"
                  className="d-block w-80px h-64px"
                  alt="Slide 1"
                />
              </div>
            </div>
            <div className="carousel-item p-4">
              <img
                src="/assets/Quote.png"
                className="d-block w-80px h-64px"
                alt="Slide 1"
              />
              <p className=" pt-3 carousal-p-small-screen">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris
              </p>
              <div className=" d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                  <h5 className="mb-0">Amal Khatean</h5>
                  <p className="text-Dark-Gray">Senior UI UX designer</p>
                </div>
                <img
                  src="/assets/Quote.png"
                  className="d-block w-80px h-64px"
                  alt="Slide 1"
                />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="carousel-control-prev mb-5 opacity-100"
            type="button"
            data-bs-target="#customCarousel"
            data-bs-slide="prev"
          >
            <div className="px-3 py-2 bg-white rounded-circle ">
              <img
                src="/assets/Vector-left.png"
                className="carousel-control-prev-icon victor-size p-0 m-0"
                alt=""
              />
            </div>
          </button>
          <button
            className="carousel-control-next mb-5 opacity-100"
            type="button"
            data-bs-target="#customCarousel"
            data-bs-slide="next"
          >
            <div className="px-3 py-2 bg-white rounded-circle ">
              <img
                src="/assets/Vector-right.png"
                className="carousel-control-prev-icon victor-size p-0 m-0"
                alt=""
              />
            </div>
          </button>
        </div>
        <div className="bg-Pattens-Blue py-4">
          <img src=" /assets/sig.png" alt="" className="w-100" />
        </div>
      </div>
    </>
  );
};

export default Partners;
