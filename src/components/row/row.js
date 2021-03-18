import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './row.css';
import { Link } from 'react-router-dom';
import { fetchMovie, fetchTv } from '../../requests';
import Grow from '@material-ui/core/Grow';
import ModalVideo from "react-modal-video";
import { Button, ButtonBase, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { PlayArrowRounded } from '@material-ui/icons';
import './modalVideo.css';
import Trailer from './trailer';

// import YouTube from 'react-youtube';
// import movieTrailer from 'movie-trailer';

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
    // console.log(addTheme.palette.primary)

    const [movies, setMovies] = useState([]);
    // const [trailerUrl, setTrailerUrl] = useState("")
    // const [movieType, setMovieType] = useState([])
    // const [videoId, setVideoId] = useState([]);
    // const [movieId, setMovieId] = useState('');
    // const [playing, setPlaying] = useState(false);

    // const base_url = "https://image.tmdb.org/t/p/original/";


    // const getMovieInfo = async (movieInfo) => {
    //     axios.get(fetchMovie(movieInfo)).then((response) => {
    //         let videos = response.data.videos.results;
    //         let vidId = videos[0].key;
    //         console.log("IM INSIDE MOVIE", videos)
    //         console.log(vidId)
    //         setVideoId(vidId);
    //     }).catch((err) => console.log(err));
    // }

    // const getTvInfo = async (tvInfo) => {
    //     axios.get(fetchTv(tvInfo)).then((response) => {
    //         console.log(response)
    //         let videos = response.data.videos.results;
    //         let vidId = videos[0].key;
    //         console.log("IM INSIDE TV", videos)
    //         console.log(vidId)
    //         setVideoId(vidId)

    //     }).catch((err) => console.log(err))
    // }


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

    // useEffect(() => {
    //     if (mediaType === 'movie') {
    //         getMovieInfo(movieId)
    //     }
        
    //     if (mediaType === 'tv') {
    //         getTvInfo(movieId)
    //     }

    //     if (mediaType === 'all') {
    //         if (movieType === 'movie') {
    //             getMovieInfo(movieId)
    //         }

    //         if (movieType === 'tv') {
    //             getTvInfo(movieId)
    //         }
    //     }

        
    // },[movieId])



    // const handleClick = (movie) => {
    //     console.log("THIS IS THE MOVIEEEEEE",movie)
    //     // console.log(e.target.value)
    //     setMovieType(movie.media_type)
    //     setMovieId(movie.id)

    //     // setPlaying(true)

    // }

    return (
        <div className={classes.row}>
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        
                        // <p onClick={() => handleClick(movie)}>
                        //     <Trailer movie={movie} videoId={videoId} isLargeRow={isLargeRow} />
                        // </p>
                        
                        // <>
                        //     <Trailer movie={movie} videoId={videoId} isLargeRow={isLargeRow} />
                        // </>
                        
                        <Trailer movie={movie} mediaType={mediaType} isLargeRow={isLargeRow} />

                        // <ButtonBase className={classes.row__poster} onClick={() => handleClick(movie)}>
                        //     <Trailer movie={movie} videoId={videoId} isLargeRow={isLargeRow} />
                        // </ButtonBase>

                        // <Card>
                        //     <CardActionArea>
                        //         <CardMedia
                        //             height="140"
                        //         >
                        //             <Trailer movie={movie} videoId={videoId} isLargeRow={isLargeRow} />
                        //         </CardMedia>
                        //     </CardActionArea>
                        // </Card>


                        // <React.Fragment>
                            
                        //     <img 
                        //         className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        //         key={movie.id}
                        //         // onClick={() => handleTrailer(movie)}
                        //         onClick={() => handleClick(movie)}
                        //         src={`${base_url}${
                        //         isLargeRow ? movie.poster_path : movie.backdrop_path
                        //         }`} 
                        //         alt={movie.name} 
                        //     />
                        //     <Grow in={playing} mountOnEnter unmountOnExit>
                        //         <ModalVideo
                        //             channel='youtube'
                        //             isOpen='true'
                        //             videoId={videoId}
                        //             onClose={() => setPlaying(false)}
                        //         />
                        //     </Grow>
                        //     {/* <Trailer /> */}
                        //     {/* {videoId &&
                        //         <Grow in={playing} mountOnEnter unmountOnExit>
                        //             <ModalVideo
                        //                 channel='youtube'
                        //                 isOpen='true'
                        //                 videoId={videoId}
                        //                 onClose={() => setPlaying(false)}
                        //             />
                        //         </Grow>
                        //     } */}
                        //     {/* <Button variant="contained" onClick={() => setPlaying(true)} ></Button> */}
                        // </React.Fragment>
                        // <div className={`card row__poster ${isLargeRow && "row__posterLarge"}`}>
                            // <Link to={`/movie/${movie.id}`}>
                            //     <img 
                            //         className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            //         key={movie.id}
                            //         // onClick={() => handleTrailer(movie)}
                            //         src={`${base_url}${
                            //         isLargeRow ? movie.poster_path : movie.backdrop_path
                            //         }`} 
                            //         alt={movie.name} 
                            //     />
                            // </Link>
                        // </div>
                    )
                ))}
            </div>
            {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
        </div>
    )
}

export default Row;
