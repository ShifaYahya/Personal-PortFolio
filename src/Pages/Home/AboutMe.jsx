import React,  { useState } from 'react';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('Education');

  const renderContent = () => {
    switch (activeTab) {
      case 'Education':
        return (
          <div>
            <h1 className="education-heading">Education:</h1>
            <p className="hero--section-description">
            ● B.S Computer Science <br />
            ● Saudi Electronic University <br />
            ● Expected Graduation Year: 2027
            </p>
          </div>
        );
      case 'Experience':
        return (
          <div>
            <h1 className="education-heading">Experience:</h1>
            <p className="hero--section-description">
               <br />
              
            </p>
          </div>
        );
      case 'Achievements':
        return (
          <div>
            <h1 className="education-heading">Achievements:</h1>
            <p className="hero--section-description">
               <br />
             
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/devfocus.svg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="about-paragraph">
            As a dedicated Computer Science student at Saudi Electronic University, I thrive on tackling complex challenges, embracing innovation, and contributing to the ever-evolving digital landscape with creativity and determination.
          </p>

          <div className="tabs">
            <button onClick={() => setActiveTab('Education')} className={activeTab === 'Education' ? 'active' : ''}>Education</button>
            <button onClick={() => setActiveTab('Experience')} className={activeTab === 'Experience' ? 'active' : ''}>Experience</button>
            <button onClick={() => setActiveTab('Achievements')} className={activeTab === 'Achievements' ? 'active' : ''}>Achievements</button>
          </div>

          <div className="tab-content">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
