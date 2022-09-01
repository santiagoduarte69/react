import { MoviesGrid } from "./MoviesGrid";
import styles from "./App.module.css";

export function App(){
  return <div>
          <header>
            <h1 className={styles.movieTitle}>Movies</h1>
          </header>
          <main>
            <MoviesGrid></MoviesGrid>
          </main>
  </div>
}