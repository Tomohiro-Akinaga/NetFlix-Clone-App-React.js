export default async function popularMovieAPI() {
    const API_URL =
        "https://api.themoviedb.org/3/movie/popular?api_key=9a488bdcdb8993c3fff35cd18757981d&language=en-US&page=1";
    return await fetch(API_URL).then((res) => res.json());
}
