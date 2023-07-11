import '../stylesheets/home.css';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className="main-container">
        <About />
        <br />
        <Skills />
      </div>
      <Footer />
    </>
  );
}
