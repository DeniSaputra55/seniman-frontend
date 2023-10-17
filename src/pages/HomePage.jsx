import {Container, Row, Col} from "react-bootstrap";
// import HeroImage from '../assets/img/hero.png';
import SearchPage from "../components/SearchPage";
const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col>
            <h2>Cari dan Temukan <br></br><span>Pekerjaan Kreatif mu</span></h2>
            <SearchPage>Cari</SearchPage>
            <p>Pencarian Terpopuler </p>
            </Col>
            <button className="btn btn-primary btn-lg rounded-32 me-2">Mobile Design</button>
            <button className="btn btn-primary btn-lg rounded-32 me-2">Logo</button>
            <button className="btn btn-primary btn-lg rounded-32 me-2">App Design</button>
            <button className="btn btn-primary btn-lg rounded-32 me-2">Website Design</button>
          </Row>
        </Container>
      </header>
      <div className="pekerjaan w-100 min-vh-100"></div>
    </div>
  )
}

export default HomePage