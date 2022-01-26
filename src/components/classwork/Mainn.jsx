import React from "react";

class Mainn extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Carosuel */}
        <div className="container-fluid m-0 no-gutters p-0">
          <div className="row">
            <div className="col-md-12">
              <div
                id="carouselExampleCaptions"
                className="carousel slide carousel-fade"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="2"
                  ></li>
                </ol>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="images/slider 4.png"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images/slider 2.png"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images/slider 6.png"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev border-0"
                  type="button"
                  data-target="#carouselExampleCaptions"
                  data-slide="prev"
                  style={{ backgroundcolor: "transparent" }}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  className="carousel-control-next border-0"
                  type="button"
                  data-target="#carouselExampleCaptions"
                  data-slide="next"
                  style={{ backgroundcolor: "transparent" }}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* testimonials */}
        <div className="row justify-content-center m-3">
          <div className="card-deck">
            <div className="card bg-primary text-white">
              <img
                src="images/logo-coca-cola.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Coca-Cola
                </h5>
                <p className="card-text text-center text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae porro explicabo illo tempora recusandae saepe temporibus ipsum modi facere perspiciatis, dolore laboriosam quis cumque molestiae debitis quia ipsam neque. Adipisci.
                </p>
              </div>
            </div>
            <div className="card bg-success text-white">
              <img
                src="images/logo-godrej.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Godrej
                </h5>
                <p className="card-body text-center text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, voluptatibus odit doloremque soluta expedita aspernatur debitis quisquam earum fugit atque rerum porro quae in numquam, unde sint, illo a impedit?
                </p>
              </div>
            </div>
            <div className="card bg-warning text-white">
              <img
                src="images/logo-paypal.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Paypal
                </h5>
                <p className="card-body text-center text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, alias, quia officiis aperiam fugiat magni provident placeat sed maxime quis saepe architecto, facere esse voluptatem labore iusto neque illo. Fugit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Mainn;
