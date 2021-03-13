import { Grow } from '@material-ui/core';
import React, { useState } from 'react';
import ModalVideo from "react-modal-video";
import './modalVideo.css';
import "./row.css"

function Trailer({ movie, videoId, isLargeRow }) {
    const [playing, setPlaying] = useState(false);

    const base_url = "https://image.tmdb.org/t/p/original/";

    return (
        <React.Fragment>
            <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                // onClick={() => handleTrailer(movie)}
                onClick={() => setPlaying(true)}
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
