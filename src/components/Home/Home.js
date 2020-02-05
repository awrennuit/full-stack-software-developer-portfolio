import React, {Component} from 'react';
import './Home.css';

class Home extends Component{

  render(){
    return(
      <div className="main-container">
        <div className="main-card home-grid">
          <img 
            className="avatar" 
            src="./images/avatar.jpg" 
            alt="shoulders and up of me looking slightly to the left"
          />
          <h1 className="home-heading">About Me</h1>
          <p className="home-bio">It had long been my belief that human thought consists basically of atomic or molecular motion, convertible into ether waves of radiant energy like heat, light, and electricity. This belief had early led me to contemplate the possibility of telepathy or mental communication by means of suitable apparatus, and I had in my college days prepared a set of transmitting and receiving instruments somewhat similar to the cumbrous devices employed in wireless telegraphy at that crude, pre-radio period. These I had tested with a fellow-student; but achieving no result, had soon packed them away with other scientific odds and ends for possible future use. Now, in my intense desire to probe into the dream life of Joe Slater, I sought these instruments again; and spent several days in repairing them for action. When they were complete once more I missed no opportunity for their trial. At each outburst of Slaterís violence, I would fit the transmitter to his forehead and the receiver to my own; constantly making delicate adjustments for various hypothetical wave-lengths of intellectual energy. I had but little notion of how the thought-impressions would, if successfully conveyed, arouse an intelligent response in my brain; but I felt certain that I could detect and interpret them. Accordingly I continued my experiments, though informing no one of their nature.</p>
          <p className="home-bio2">I do not recall distinctly when it began, but it was months ago. The general tension was horrible. To a season of political and social upheaval was added a strange and brooding apprehension of hideous physical danger; a danger widespread and all-embracing, such a danger as may be imagined only in the most terrible phantasms of the night. I recall that the people went about with pale and worried faces, and whispered warnings and prophecies which no one dared consciously repeat or acknowledge to himself that he had heard. A sense of monstrous guilt was upon the land, and out of the abysses between the stars swept chill currents that made men shiver in dark and lonely places. There was a daemoniac alteration in the sequence of the seasonsóthe autumn heat lingered fearsomely, and everyone felt that the world and perhaps the universe had passed from the control of known gods or forces to that of gods or forces which were unknown.</p>
        </div>
      </div>
    );
  }
}

export default Home;