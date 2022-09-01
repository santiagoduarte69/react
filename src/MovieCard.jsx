import styles from "./MovieCard.module.css";

export function MovieCard({ movie }){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return  (
    <li className={styles.movieCard}>
        <img src={imageUrl} alt={movie.title} className={styles.movieUmage} width={230} height={345}></img>
        <div>{movie.title}</div>
    </li>
    );
}