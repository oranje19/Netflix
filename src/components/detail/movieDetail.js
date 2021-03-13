// import React, { useEffect, useState } from 'react';
// import { fetchMovieDetail, fetchMovieVideos } from '../../requests';
// import "./movieDetail.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import { Modal } from "react-bootstrap";
// import ReactPlayer from "react-player";

// function MovieDetail({ match }) {
//     let params = match.params;
//     const [detail, setDetail] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);
//     const [video, setVideo] = useState([]);

//     console.log("THIS IS PARAMS",params)
//     console.log("this is the video", video)

//     useEffect(() => {
//         const fetchAPI = async () => {
//             setDetail(await fetchMovieDetail(params.id));
//             setVideo(await fetchMovieVideos(params.id));
//         };

//         fetchAPI();
//     }, [params.id]);

//     const MoviePlayerModal = (props) => {
//         const youtubeUrl = 'https://www.youtube.com/watch?v=';
//         return (
//             <Modal
//                 {...props}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title
//                         id="contained-modal-title-vcenter"
//                         style={{color: "#000000", fontWeight: 'bolder'}}
//                     >
//                         {detail.title}
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body style={{ backgroundColor: "#000000"}}>
//                     <ReactPlayer
//                         className="container-fluid"
//                         url={youtubeUrl }
//                         playing
//                         width="100%"
//                     >
//                     </ReactPlayer>
//                 </Modal.Body>
//             </Modal>
//         )
//     }

//     return (
//         <div className="container">
//             <div className="row mt-2">
//                 <MoviePlayerModal
//                     show={isOpen}
//                     onHide={() => {
//                         setIsOpen(false)
//                     }}
//                 >

//                 </MoviePlayerModal>
//                 <div className="col text-center" style={{width: '100%'}}>
//                     <img 
//                         className="img-fluid" 
//                         src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`} 
//                         alt={detail.title} 
//                     />
//                     <div className="carousel-center">
//                         <i 
//                             className="far fa-play-circle" 
//                             style={{fontSize: 95, color: "#f4c10f", cursor: "pointer"}}
//                             onClick={() => setIsOpen(true)}
//                         />
//                     </div>
//                     <div className="carousel-caption" style={{textAlign: "center", fontSize: 35}}>
//                         {detail.title}
//                     </div>
//                 </div>
//             </div>
//             <div>

//             </div>
//         </div>
//     )
// }

// export default MovieDetail;
