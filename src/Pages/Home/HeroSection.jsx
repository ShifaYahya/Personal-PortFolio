import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const HeroSection = () => {
  const navigate = useNavigate();
  const [titles] = useState(["Software Engineer", "FrontEnd Developer", "Programmer"]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Function to update the displayed title
  const updateDisplayedTitle = () => {
    if (isTyping) {
      // Typing animation
      if (displayedTitle.length < titles[currentTitleIndex].length) {
        setDisplayedTitle(prevTitle => prevTitle + titles[currentTitleIndex][prevTitle.length]);
      } else {
        setIsTyping(false);
      }
    } else {
      // Backspacing animation
      if (displayedTitle.length > 0) {
        setDisplayedTitle(prevTitle => prevTitle.slice(0, -1));
      } else {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsTyping(true);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(updateDisplayedTitle, 200); // Adjust timing for typing and backspacing
    return () => clearTimeout(timer);
  }, [isTyping, displayedTitle, currentTitleIndex, titles]);

  useEffect(() => {
    // Reset displayed title when currentTitleIndex changes
    setDisplayedTitle('');
  }, [currentTitleIndex]);

  const handleDownloadCV = () => {
    const cvFileName = '/Resume1.pdf';
    window.open(cvFileName, '_blank');
  };

  const handleNavigateToContact = () => {
    navigate('/Contact');
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section-title">Hey, I'm Shifa</p>
          <h1 className="hero--section--title">
            <span className="hero-section-title-color">{displayedTitle}</span>
            <span className="cursor"></span> {/* Blinking cursor */}
          </h1>
          <p className="hero--section--description">
            Passionate computer science student with a drive for innovation,
            aspiring to become a versatile software engineer.</p>
        </div>
        <div className="btn-container">
          <Link
            activeClass="navbar--active--content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btn btn-primary"
          >
            Get In Touch
          </Link>
          <button
            className="btn btn-secondary"
            onClick={handleDownloadCV}
          >
            Download CV
          </button>
        </div>
      </div>
      <div className="hero--section--img">
        <img
          src="./img/laptop.png"
          alt="Hero Section"
          height={450}
          width={250}
        />
      </div>
    </section>
  );
};

export default HeroSection;
