import React, { useEffect, useState, useRef } from "react";

const Counter = ({ targetNumber, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000; // Animation duration in milliseconds
          const stepTime = Math.abs(Math.floor(duration / targetNumber));
          const timer = setInterval(() => {
            start += 1;
            if (start > targetNumber) {
              clearInterval(timer);
              setCount(targetNumber);
            } else {
              setCount(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetNumber]);

  return (
    <h2 ref={ref} className="fw-bolder text-Cerulean fs-50px">
      {count}
      {suffix}
    </h2>
  );
};

const RegionalAllocation = () => {
  return (
    <>
      <div>
        <div className="RegionalAllocation-section position-relative">
          <div
            className="position-absolute top-0 start-0 w-100 h-100 bg-Denim opacity-75"
            style={{ zIndex: 0 }}
          ></div>
          <div className="container-fluid">
            <div className="row position-relative " style={{ zIndex: 1 }}>
              <div className="col-md-6 d-flex align-items-center justify-content-center py-5">
                {/* <video
                  src="/assets/diamond.mp4"
                  className="diamond "
                  autoPlay
                  loop
                  muted
                /> */}
                <iframe
                  className="rounded-5"
                   width="80%" 
                   height="400px" 
                  src="https://www.youtube.com/embed/2Jxl5nKeuPc?autoplay=1&loop=1&mute=1&playlist=2Jxl5nKeuPc&controls=0&modestbranding=1"
                  allow="autoplay; encrypted-media"
                ></iframe>
              </div>
              <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start justify-content-center pt-4">
                <div className="w-50">
                  <h2>Regional Allocation, Global Distribution.</h2>
                  <h6 className="FW-Light w-75">
                    With Operating Locations Across Egypt, UAE, KSA, & Bahrain.
                  </h6>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center bg-Curious-Blue">
                <div className=" d-flex flex-column align-items-center justify-content-center  p-5">
                  <h2 className="fw-bolder">OUR STORY IN NUMBER</h2>
                  <p className="FW-Light w-75">
                    Our comprehensive HR services provide employee management
                    from hiring to firing and everything in between. We’ve
                    helped every one of our clients scale their business by
                    understanding their wants and needs and delivering an
                    unparalleled service that is second to none. Our
                    comprehensive HR services provide employee management from
                    hiring to firing and everything in between. We’ve helped
                    every one of our clients scale their business by
                    understanding their wants and needs and delivering an
                    unparalleled service that is second to none.
                  </p>
                </div>
              </div>
              <div className="col-md-6 bg-Curious-Blue d-flex flex-column align-items-center justify-content-center">
                <div className="container mb-5">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="bg-Alice-Blue mb-3 d-flex flex-column h-30vh align-items-start justify-content-center rounded-4 p-4">
                        <Counter targetNumber={100} suffix="+" />
                        <h6 className="fw-light text-Dark-Gray">
                          Companies we have partnered with worldwide.
                        </h6>
                      </div>
                      <div className="bg-Alice-Blue mb-3 d-flex flex-column h-30vh align-items-start justify-content-center rounded-4 p-4">
                        <p className="text-Cerulean m-0 p-0">Fortune</p>
                        <Counter targetNumber={500} />
                        <h6 className="fw-light text-Dark-Gray">
                          We have partnered with clients prominently featured on
                          the Fortune 500.
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="bg-Alice-Blue mb-3 d-flex flex-column h-30vh align-items-start justify-content-center rounded-4 p-4">
                        <Counter targetNumber={20} suffix="+" />
                        <h6 className="fw-light text-Dark-Gray">
                          Different departments & industries we’ve worked in.
                        </h6>
                      </div>
                      <div className="bg-Alice-Blue mb-3 d-flex flex-column h-30vh align-items-start justify-content-center rounded-4 p-4">
                        <Counter targetNumber={100} suffix="+" />
                        <h6 className="fw-light text-Dark-Gray">
                          Outsourcing deals with companies from all over the
                          EMEA & The Americas Regions.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegionalAllocation;
