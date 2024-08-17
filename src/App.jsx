import styles from "./App.module.css";
import { About } from "./components/about/about";
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
      </div>
    </>
  );
}

export default App;
