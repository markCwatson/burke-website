import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="/#Home" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="/#Home" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="/#Home" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="/#Home" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="/#Home" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="/#Home" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                BJB Renos Plus Inc.
              </h6>
              <a href="/#Home">
                <img src="/logo.png" alt="" className="bjb-navbar-logo" />
              </a>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Carpentry
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Finish Work
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Siding
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Additions
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Decks
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/#Home" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="/#services" className="text-reset">
                  Services
                </a>
              </p>
              <p>
                <a href="/#projects" className="text-reset">
                  Projects
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Halifax, NS. Canada
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                bjbrenosplusinc@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" />
                1-902-818-8936
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          bjbrenos.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
