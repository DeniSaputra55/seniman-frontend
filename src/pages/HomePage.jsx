import {Container, Row, Col} from "react-bootstrap";
// import HeroImage from '../assets/img/hero.png';
const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col>
            <h4>Senimanku 
            </h4>
            <h2>Hire Seniman Kreatif di <br></br><span>Indonesia</span></h2>
            <p>Connect dengan seniman - seniman terbaik yang ada di seluruh <br></br><span>Indonesia</span>
            </p>
            <button className="btn btn-primary btn-lg rounded-32 me-2">Hire Seniman</button>
            {/* <button className="btn btn-outline-danger btn-lg rounded-1 ">Lihat Desainer</button> */}
            </Col>
            
          </Row>
        </Container>
      </header>
      <div className="pekerjaan w-100 min-vh-100"></div>
    </div>
  )
}

export default HomePage