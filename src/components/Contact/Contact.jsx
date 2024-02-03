import { contactData } from '../../utils/contactData';
import { Helmet } from 'react-helmet';
import ContactInfo from './ContactInfo';
import Footer from '../Footer';
import Header from '../Header';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>contact - awren nuit's software engineering portfolio</title>
        <link rel="canonical" href="http://www.awrennuit.com/#/contact" />
        <meta
          name="description"
          content="Different ways to contact full stack software engineer awren nuit. Methods include email, phone, GitHub, and LinkedIn."
        />
        <meta
          name="keywords"
          content="Full Stack, Frontend, Front-end, Front end, Backend, Back-end, Back end, Software Engineer, Software Engineering, Software Developer, Web Developer, Portfolio, Portfolio Website, Software Developer Portfolio, JavaScript, CSS, React, Node.js, awren, awren nuit"
        />
      </Helmet>
      <Header />
      <main className="contact">
        <div className="contact__writeup">
          <p>
            Hello! These are different mediums to reach me. My preference is via
            email or LinkedIn, but any option is fine. I am in the US Central
            (CDT/CST) timezone. I would love to connect if you are seeking an
            empathetic software engineer.
          </p>
          <span className="contact__sidebars"></span>
          <span className="contact__divider"></span>
        </div>
        <ul className="contact__list">
          {contactData.map((info, i) => (
            <ContactInfo
              ariaLabel={info.ariaLabel}
              className={info.class}
              href={info.href}
              key={i}
              label={info.label}
              method={info.method}
              rel={info.rel}
              target={info.target}
            />
          ))}
        </ul>
        <div className="contact__thanks">
          <p>Thanks for stopping by. Have a wonderful day!</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
