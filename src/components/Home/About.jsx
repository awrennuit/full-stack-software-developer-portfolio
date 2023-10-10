export default function About() {
  return (
    <div className="about">
      <h2 className="about__heading">
        <span className="about__heading-copy">A little history...</span>
      </h2>
      <div className="about__content-container">
        <p className="about__content-copy">
          Growing up I was always coming up with new ideas and figuring out how
          to bring them to life. As I got older this manifested through visual
          arts and{' '}
          <a
            href="https://cavebirdrecords.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            music
          </a>
          . I performed with the school orchestra all through middle and high
          school, and have taught myself dozens of instruments since then.
        </p>
        <p className="about__content-copy">
          I also have an affinity for plants, which blossomed into a deep study
          of Western herbalism. Forming a bond with the plants that I use is
          very important to me, so I raise many of them from seed so I can study
          them and be present with them through their entire lifecycle from seed
          to sprout to bloom and back again to seed. Ask me about my homemade
          cough syrup sometime - it's delicious and nutritious!
        </p>
        <p className="about__content-copy">
          My passions for creating and understanding how things work on a
          fundamental level carry over into my software development. I have a
          profound appreciation for engaging, interactive, and accessible
          design. I live by the words "everyone has something to teach." Every
          interaction is an opportunity to learn something new.
        </p>
        <br />
        <p className="about__contact">
          I'm always open for a conversation, so feel free to&nbsp;
          <a
            className="u-link about__contact-link"
            href="mailto:awren.nuit@gmail.com?subject=Let's%20Have%20a%20Conversation"
          >
            contact me
          </a>
          .
        </p>
        <span className="about__bottom-line"></span>
        <span className="about__bottom-design-left"></span>
        <span className="about__bottom-design-right"></span>
      </div>
    </div>
  );
}
