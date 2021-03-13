import axios from 'axios';
import API_KEY from './config/api_key';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

const movieUrl = "https://api.themoviedb.org/3/movie";

const trendingUrl = `{movieUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`;

export const fetchMovie = (id) => {
    return `/movie/${id}?api_key=${API_KEY}&append_to_response=videos,release_dates`
}

export const fetchTv = (id) => {
    return `/tv/${id}?api_key=${API_KEY}&append_to_response=videos,content_ratings`
}

export const fetchMovies = async () => {
    try {
        const { data } = await axios.get(trendingUrl, {
            params: {
                api_key: API_KEY,
                language: 'en_US',
                page: 1
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}

export const fetchMovieDetail = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}`, {
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        });
        return data;
    } catch (error) {}
};

export const fetchMovieVideos = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
            params: {
                api_key: API_KEY
            }
        });
        return data['results'][0]
    } catch (error) {}
}

export default requests;