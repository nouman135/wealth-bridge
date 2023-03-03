import React from "react";
import "../components/homepage.css";

export default function HomePage() {
  return (
    <div>
      <header className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h3 className="mb-5">
                  Discover A World Of investment Products and Ideas That Can
                  Help You Achieve Your Long-term Financial Goals
                </h3>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="features-icons bg-light text-center">
        <div className="container mt-3 mb-3">
          <div style={{ margintop:'5rem' }} className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <h3>Expert Idea Creators</h3>
                <p className="lead mb-0">
                  Through this platform, you will get ideas from experianced and
                  experts persons
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <h3>Relationship Manager</h3>
                <p className="lead mb-0">
                  Our Expert RM's Suggest you Ideas According To Your Interest
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <h3>Easy to Use</h3>
                <p className="lead mb-0">
                  This Application is Designed And Developed User Friendly As
                  Everyone Can Use It Easily
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </section>
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6 order-lg-2 text-white showcase-img1"></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Customized Investment Ideas</h2>
              <p className="lead mb-0">
              At our platform, we understand that every investor has unique financial goals and risk tolerance. That's why we offer customized investment ideas tailored to your individual needs.Our team of experts work closely with you to create personalized investment strategies that align with your goals, timeline, and risk preferences. Let us help you build a portfolio that's tailored to your needs
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 text-white showcase-img2"></div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Diverse Investment Options</h2>
              <p className="lead mb-0">
              Diversity is an essential component of any successful investment strategy. At our platform, we provide a wide range of investment options to help you achieve your financial goals. Whether you're interested in stocks, bonds, mutual funds, or alternative investments, we have the expertise and resources to help you create a diversified portfolio. Our team of experts works closely with you to understand your risk tolerance and investment objectives, and we provide customized investment solutions tailored to your individual needs. By offering a variety of investment options, we aim to help you build a portfolio that is both resilient and flexible in the face of market volatility. With our diverse investment options, you can invest in a range of sectors, industries, and asset classes, giving you the opportunity to achieve your financial goals while managing risk.

              </p>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 order-lg-2 text-white showcase-img3"></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Easy to Use platform</h2>
              <p className="lead mb-0">
              We understand that investing can seem daunting, which is why we've designed our platform to be user-friendly and easy to navigate. Our platform is designed with the needs of the user in mind, and we've made sure that every aspect of the investment process is clear and straightforward. From account setup to investment selection, we guide you every step of the way, making it easy for you to invest in the opportunities that align with your financial goals. Our user-friendly interface is intuitive and easy to use, so you don't need to be a financial expert to make informed investment decisions. With our platform, you have access to a wealth of resources and tools that make it easy to manage your investments, track your performance, and stay up to date on market trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action text-white text-center" id="signup">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <h2 className="mb-4">Request For Relationship Manager</h2>

              <form
                className="form-subscribe"
                id="contactFormFooter"
                data-sb-form-api-token="API_TOKEN"
              >
                <div className="row">
                  <div className="col">
                    <input
                      className="form-control form-control-lg"
                      id="emailAddressBelow"
                      type="email"
                      placeholder="Email Address"
                      data-sb-validations="required,email"
                    />
                    <div
                      className="invalid-feedback text-white"
                      data-sb-feedback="emailAddressBelow:required"
                    >
                      Email Address is required.
                    </div>
                    <div
                      className="invalid-feedback text-white"
                      data-sb-feedback="emailAddressBelow:email"
                    >
                      Email Address Email is not valid.
                    </div>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-primary btn-lg"
                      id="submitButton"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>

                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
              <p className="text-muted small mb-4 mb-lg-0">
                &copy; Wealth Bridge 2023. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </div>
  );
}
