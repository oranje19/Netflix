import React, { useState } from 'react';
import requests, { fetchMovie, fetchTv } from '../../requests';
import Banner from '../banner/banner';
import NavBar from '../navBar/navBar';
import Row from '../row/row';
import './homeScreen.css';
import axios from '../../axios';
import Footer from '../footer/footer';

function HomeScreen() {
    // const [videoId, setVideoId] = useState([]);

    // const getMovieInfo = async (movieInfo) => {
    //     axios.get(fetchMovie(movieInfo)).then((response) => {
    //         let videos = response.data.videos.results;
    //         let vidId = videos[0].key;
    //         setVideoId(vidId);
    //     }).catch((err) => console.log(err));
    // }

    // const getTvInfo = async (tvInfo) => {
    //     axios.get(fetchTv(tvInfo)).then((response) => {
    //         let videos = response.data.videos.results;
    //         let vidId = videos[0].key;
    //         setVideoId(vidId)
    //     }).catch((err) => console.log(err))
    // }

    return (
        <div className="homeScreen">
            <NavBar />

            <Banner />

            <Row 
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
                mediaType='tv'
            />

            <Row title="Trending Now" mediaType='all' fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" mediaType='movie' fetchUrl={requests.fetchTopRated} /> 
            <Row title="Action Movies" mediaType='movie' fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" mediaType='movie' fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" mediaType='movie' fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" mediaType='movie' fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" mediaType='movie' fetchUrl={requests.fetchDocumentaries} />

        </div>
    )
}

export default HomeScreen;
