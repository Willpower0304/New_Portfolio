import styles from "./App.module.css";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/Navbar/navbar";
import { Works } from "./components/works/works";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
      </div>
      <About />
      <div className={styles.WorksContainer}>
        <Works />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
