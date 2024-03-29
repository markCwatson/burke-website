import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';

function Footer({ home }) {
  const getHref = (section, id) => {
    if (id) {
      return `/services/${id}`;
    }
    return home ? `#${section}` : `/`;
  };

  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Follow us on socail media!</span>
        </div>

        <div>
          <a href="#Home" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="#Home" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a
            href="https://www.instagram.com/bjb_renos_plus_inc/"
            className="me-4 text-reset"
          >
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="#Home" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                BJB Renos Plus Inc.
              </h6>
              <Box
                component="img"
                sx={{
                  height: {
                    xs: 50,
                    sm: 60,
                    md: 70,
                    lg: 80,
                    xl: 90,
                  },
                }}
                alt="BJB Renos Plus Inc logo"
                src="/logo.png"
              />
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <a href={getHref('', '0')} className="text-reset">
                  Carpentry
                </a>
              </p>
              <p>
                <a href={getHref('', '1')} className="text-reset">
                  Finish Work
                </a>
              </p>
              <p>
                <a href={getHref('', '2')} className="text-reset">
                  Siding
                </a>
              </p>
              <p>
                <a href={getHref('', '3')} className="text-reset">
                  Decks
                </a>
              </p>
              <p>
                <a href={getHref('', '4')} className="text-reset">
                  Windows
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              <p>
                <a href={getHref('about', false)} className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href={getHref('services', false)} className="text-reset">
                  Services
                </a>
              </p>
              <p>
                <a href="/projects" className="text-reset">
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
                <MDBIcon color="secondary" icon="envelope" className="me-2" />
                bjbrenosplusinc@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-2" />
                1-902-818-8936
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold p-2" href="https://mdbootstrap.com/">
          BJB Renos Plus Inc.
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
