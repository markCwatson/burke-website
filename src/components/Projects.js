import { useState, useEffect, useRef, useCallback } from "react";
import { createRoot } from "react-dom/client";
import "../css/Background.css";
import "../css/Projects.css";

function Projects() {
  const slideRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(1);
  const [isMoving, setIsMoving] = useState(false);

  const processImages = useCallback((item, index) => {
    return (
      <img key={index} src={process.env.PUBLIC_URL + item.url} alt={item.alt} />
    );
  }, []);

  const moveSlides = useCallback(() => {
    slideRef.current.style.transform = `translateX(-${slideIndex * 100}%)`;
  }, [slideIndex]);

  const moveHandler = useCallback(
    (direction) => {
      setIsMoving(true);
      slideRef.current.style.transition = `transform 450ms ease-in-out`;
      direction !== "right"
        ? setSlideIndex(slideIndex - 1)
        : setSlideIndex(slideIndex + 1);
      moveSlides();
    },
    [moveSlides, slideIndex]
  );

  // fetch images
  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/burke-website/projects.json");
        if (!response.ok) {
          throw new Error("Network response not okay");
        }
        const data = await response.json();
        // cloned first and last image
        data.push(data[0]);
        data.unshift(data[data.length - 2]);
        // show slider
        const slidesArray = data.map(processImages);
        const container = document.getElementById("projects-slide-id");
        const root = createRoot(container);
        root.render(slidesArray);
        moveSlides();
      } catch (error) {
        console.error("Error during fetch operation:", error);
      }
    }

    fetchImages();
  }, [moveSlides, processImages]);

  // click right btn
  function handleRightButtonClick() {
    if (isMoving) {
      return;
    }
    moveHandler("right");
  }

  // click left btn
  function handleLeftButtonClick() {
    if (isMoving) {
      return;
    }
    moveHandler();
  }

  // slide transition end handler
  function handleSlideTransitionEnd() {
    setIsMoving(false);
    const slidesArray = [...slideRef.current.querySelectorAll("img")];

    if (slideIndex === 0) {
      slideRef.current.style.transition = "none";
      setSlideIndex(slidesArray.length - 2);
      moveSlides();
    }

    if (slideIndex === slidesArray.length - 1) {
      slideRef.current.style.transition = "none";
      setSlideIndex(1);
      moveSlides();
    }
  }

  return (
    <div className="background-image" id="projects">
      <div className="projects-container">
        <h1>Explore our project gallery</h1>
        <div className="projects-slider">
          <div className="projects-slider-btn-container">
            <button
              className="projects-slider-btn projects-slider-btn-left"
              onClick={handleLeftButtonClick}
            >
              <img
                src="/burke-website/images/arrow-left.svg"
                alt="left-arrow"
              />
            </button>
            <button
              className="projects-slider-btn projects-slider-btn-right"
              onClick={handleRightButtonClick}
            >
              <img
                src="/burke-website/images/arrow-right.svg"
                alt="right-arrow"
              ></img>
            </button>
          </div>
          <div
            className="projects-slide"
            ref={slideRef}
            onTransitionEnd={handleSlideTransitionEnd}
            id="projects-slide-id"
          >
            <img src="/burke-website/images/proj1.jpg" alt="alt"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
