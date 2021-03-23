import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './row.css';
import { makeStyles } from '@material-ui/core/styles'
import './modalVideo.css';
import Trailer from './trailer';

const useStyles = makeStyles((theme) => ({
    row: {
        color: "white",
        marginLeft: "20px"
    },

    row__posters: {
        display: "flex",
        overflowY: "hidden",
        overflowX: "scroll",
        padding: "20px",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    },

    row__poster: {
        maxHeight: "100px",
        objectFit: "contain",
        marginRight: "10px",
        width: "100%",
        transition: "transform 450ms",
        "&:hover": {
            transform: "scale(1.08)",
            opacity: "1"
        }
    },

    row__posterLarge: {
        maxHeight: "250px",
        "&:hover": {
            transform: "scale(1.09)",
            opacity: "1"
        }
    }

}))

function Row({ title, fetchUrl, mediaType, isLargeRow = false }) {
    const classes = useStyles();
    console.log(classes);

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log("this is the data asli", request.data)
            console.log("this is the results", request.data.results)
            setMovies(request.data.results);

            return request;
        }

        fetchData();
    }, [fetchUrl])

    return (
        <div className={classes.row}>
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <Trailer movie={movie} mediaType={mediaType} isLargeRow={isLargeRow} />
                    )
                ))}
            </div>
        </div>
    )
}

export default Row;
