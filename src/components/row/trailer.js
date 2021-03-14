import { Grow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ModalVideo from "react-modal-video";
import './modalVideo.css';
import "./row.css"
import { fetchMovie, fetchTv } from '../../requests';
import axios from '../../axios';

function Trailer({ movie, mediaType, isLargeRow }) {
    const [playing, setPlaying] = useState(false);

    const [movieType, setMovieType] = useState([])
    const [videoId, setVideoId] = useState([]);
    const [movieId, setMovieId] = useState('');

    const base_url = "https://image.tmdb.org/t/p/original/";


    const getMovieInfo = async (movieInfo) => {
        axios.get(fetchMovie(movieInfo)).then((response) => {
            let videos = response.data.videos.results;
            let vidId = videos[0].key;
            console.log("IM INSIDE MOVIE", videos)
            console.log(vidId)
            setVideoId(vidId);
        }).catch((err) => console.log(err));
    }

    const getTvInfo = async (tvInfo) => {
        axios.get(fetchTv(tvInfo)).then((response) => {
            console.log(response)
            let videos = response.data.videos.results;
            let vidId = videos[0].key;
            console.log("IM INSIDE TV", videos)
            console.log(vidId)
            setVideoId(vidId)

        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        if (mediaType === 'movie') {
            getMovieInfo(movieId)
        }

        if (mediaType === 'tv') {
            getTvInfo(movieId)
        }

        if (mediaType === 'all') {
            if (movieType === 'movie') {
                getMovieInfo(movieId)
            }

            if (movieType === 'tv') {
                getTvInfo(movieId)
            }
        }


    }, [movieId])



    const handleClick = (movie) => {
        console.log("THIS IS THE MOVIEEEEEE", movie)
        // console.log(e.target.value)
        setMovieType(movie.media_type)
        setMovieId(movie.id)

        setPlaying(true)

    }

    return (
        <React.Fragment>
            <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                // onClick={() => handleTrailer(movie)}
                onClick={() => handleClick(movie)}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                alt={movie.name}
            />
            {videoId &&
                <Grow in={playing} mountOnEnter unmountOnExit>
                    <ModalVideo
                        channel='youtube'
                        autoplay
                        isOpen='true'
                        videoId={videoId}
                        onClose={() => setPlaying(false)}
                    />
                </Grow>
            }
        </React.Fragment>
    )
}

export default Trailer
