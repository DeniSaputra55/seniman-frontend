import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Rubik Grafis</h3>
            <p className="desc">
              Pelajari dan Perdalam Skill Kreatifmu di sini bersama Puluhan Ribu
              Member Lainnya
            </p>
            <div className="no mb-2 mt-4">
              <div className="text-decoration-none wtp">
                <a href="https://instagram.com/alwiin_?igshid=MzRlODBiNWFlZA==" >
                  <i className="fa-brands fa-whatsapp"></i>
                  <p className="m-0 wtp">+6285740070442</p>
                </a>
              </div>
            </div>

            <div className="email mail">
              <div className="text-decoration-none">
                <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">person-email@gmail.com</p>
                </a>
              </div>
            </div>
          </Col>

          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">Faq</Link>
            <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>

          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info selanjutnya</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">
                Subscribe
              </button>
            </div>
            <div className="social mt-3">
              <a href="https://www.instagram.com/p/CbKJNzHBF8Q/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.threads.net/">
              <i className="fa-brands fa-threads"></i>
              </a>
              <a href="https://www.youtube.com/c/RubrikGrafis">
              <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Rubik Grafis</span> , All Right Reserved{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default FooterComponent;