import React from "react";
class Footerr extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer
          className="page-footer font-small unique-color-dark"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div style={{ backgroundColor: "red" }}>
            <div className="container">
              <div className="row py-4 d-flex align-items-center">
                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0">CONNECT WITH US!</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="container text-center text-md-left mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  Get To Know Us
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  width="60px"
                />
                <p>About ShopSS</p>
                <p>Blogs</p>
                <p>Careers</p>
                <p>Terms and Conditons</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  Make Money on ShopSS
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  width="60px"
                />
                <p>
                  <a href="#!">Become An Affliate</a>
                </p>
                <p>
                  <a href="#!">Sell On ShopSS</a>
                </p>
                <p>
                  <a href="#!">Advertise On ShopSS</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  Let Us Help You
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  width="60px"
                />
                <p>
                  <a href="#!">Your Account</a>
                </p>
                <p>
                  <a href="#!">Your Recent Orders</a>
                </p>
                <p>
                  <a href="#!">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  width="60px"
                />
                <p>
                  {/* <FontAwesomeIcon icon = {FaHome}/> Lagos, Ikeja Nigeria */}
                </p>
                <p>
                  {/* <FontAwesomeIcon icon = {HiOutlineMail}/> Zobamokoli7@gmail.com */}
                </p>
                <p>
                  {/* <FontAwesomeIcon icon = {BsFillTelephoneFill }/> */}
                  09023589304
                </p>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            {" "}
            © 2021 Copyright:
            <a href="#"> ShopSS.com</a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footerr;
