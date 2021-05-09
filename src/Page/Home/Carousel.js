import React, { memo, useState } from 'react';
import { Button } from 'react-bootstrap';
import Slider from "react-slick";
import ShowVideoModal from './ShowVideoModal';


function Carousel(props) {
    const [modalShow, setModalShow] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };


    return (
        <div className="carousel" id="carousel">
            <Slider {...settings}>
                <div>
                    <img src={`/img/trailer/trailer_1.jpg`} alt="trailer" />
                    <Button onClick={() => setModalShow(true)} className="btnPlayVideo">
                        <img src="./img/play-video.png" alt="btnPlay" />
                    </Button>

                    <ShowVideoModal
                        show={modalShow}
                        video={
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/IkkZDcGNOpM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        }
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div>
                    <img src={`/img/trailer/trailer_2.jpg`} alt="trailer" />
                    <Button onClick={() => setModalShow(true)} className="btnPlayVideo">
                        <img src="./img/play-video.png" alt="btnPlay" />
                    </Button>
                    <ShowVideoModal
                        show={modalShow}
                        video={
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/EL733nvX1Pk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        }
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div>
                    <img src={`/img/trailer/trailer_3.jpg`} alt="trailer" />
                    <Button className="btnPlayVideo" onClick={() => setModalShow(true)}>
                        <img src="./img/play-video.png" alt="btnPlay" />
                    </Button>
                    <ShowVideoModal
                        show={modalShow}
                        video={
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/XnuDetmX9lU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        }
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div>
                    <img src={`/img/trailer/trailer_4.jpg`} alt="trailer" />
                    <Button className="btnPlayVideo" onClick={() => setModalShow(true)}>
                        <img src="./img/play-video.png" alt="btnPlay" />
                    </Button>
                    <ShowVideoModal
                        show={modalShow}
                        video={
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/tHjUvdbKKuY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        }
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div>
                    <img src={`/img/trailer/trailer_5.jpg`} alt="trailer" />
                    <Button className="btnPlayVideo" onClick={() => setModalShow(true)}>
                        <img src="./img/play-video.png" alt="btnPlay" />
                    </Button>
                    <ShowVideoModal
                        show={modalShow}
                        video={
                            <iframe width="100%" height="400" src="https://www.youtube.com/embed/IkkZDcGNOpM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        }
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </Slider>
        </div>
    )
}
export default memo(Carousel);