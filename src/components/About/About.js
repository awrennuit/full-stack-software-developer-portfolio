import React from 'react';
import './About.css';

export default function About() {

  return (
    <div className="about-main-container">
      <h2 className="about-heading"><span>A little history...</span></h2>
      <div className="about-content-container">
        <p>
          Growing up I was always coming up with new ideas and figuring out how to bring them
          to life. As I got older this manifested through visual arts and music. I performed 
          with the school orchestra all through middle and high school, and have taught myself 
          dozens of instruments since then.
        </p>
        <p>
          I also have an affinity for plants, which blossomed into a deep study of Western 
          herbalism. Forming a bond with the plants that I use is very important to me, so 
          I raise many of them from seed so I can study them and be present with them through 
          their entire lifecycle from seed to sprout to bloom and back again to seed. Ask me 
          about my homemade cough syrup sometime - it's delicious and nutritious!
        </p>
        <p>
          My passions for creating and understanding how things work on a fundamental level 
          carry over into my software development. I have a profound appreciation for engaging, 
          interactive, and accessible design. In addition, I love learning new technologies and 
          working outside my comfort zone. I embrace feeling uncomfortable, because that's 
          where the majority of growth takes place.
        </p>
        <br />
        <p className="about-contact">
          I'm always open for a conversation, so feel free to&nbsp;
          <a href="mailto:awren.nuit@gmail.com?subject=Let's%20Have%20a%20Conversation">
            contact me
          </a>
          .
        </p>
        <span className="about-bottom-line"></span>
        <span className="about-bottom-design-left"></span>
        <span className="about-bottom-design-right"></span>
      </div>
    </div>
  );
}