import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              © {currentYear}{" "}
              <a href="/#" className="ml-1">
                Samuel Ogunniyi
              </a>
              . All Rights Reserved.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a class="facebook" href="/#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a class="twitter" href="/#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a class="github" href="https://github.com/Starisblack">
                  <i class="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a class="linkedin" href="https://linkedin.com/in/samuel- ogunniyi-74983a151">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
