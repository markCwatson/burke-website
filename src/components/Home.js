import "../css/Background.css";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="background-home-image" id="Home">
      <div className="home-container">
        <div className="home-text">
          <h1>Welcome</h1>
          <p>
            Welcome to BJB Renos Plus Inc., a family-owned and operated
            construction company dedicated to providing high-quality
            construction services to our clients. With over 20 years of
            experience in the construction industry, we have the expertise and
            knowledge to take on any project, big or small.
          </p>
          <p>
            We specialize in residential and commercial construction, including
            custom homes, renovations, additions, and home improvements. From
            the initial consultation to the final walkthrough, we work closely
            with our clients to ensure that their vision is realized. We
            understand that every project is unique, and we take the time to
            understand our clients' specific needs and preferences.
          </p>
        </div>
        <div className="home-logo">
          <img src="/burke-website/logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
