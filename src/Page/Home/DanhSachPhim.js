import React, { memo, useState } from 'react';
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

function DanhSachPhim(props) {
    let settingsFilm = {
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }

        ]
    };


    let [isToggleOn, setToggle] = useState('dangChieu');


    const renderPhimDangChieu = () => {
        return props.danhSachPhim.filter(item =>
            (Date.parse(item.ngayKhoiChieu) >= Date.parse('2020-11-01')) &&
            (Date.parse(item.ngayKhoiChieu) <= Date.parse('2020-12-31'))
        ).map((film, index) => {
            return (
                <div className="films_item" key={index}>
                    <div className="filmImage">
                        <div className="imgFilm"><img src={film.hinhAnh} alt="" /></div>
                        <div className="overlayIcon">
                            <img className="imgIconPlay" src="./img/play-video.png" alt="iconImage" />
                        </div>
                    </div>
                    <div className="filmInfo">
                        <div className="filmInfo_title">
                            <span className="span_btn-red">C18</span>
                            <span className="filmInfo_text">{film.tenPhim}</span>
                            <p>110 phút</p>
                        </div>
                        <div className="filmInfo_btnBuy">
                            <NavLink className="btn btn-buy" to={"/chitietphim/" + film.maPhim}>
                                ĐẶT VÉ
                        </NavLink>
                        </div>
                    </div>
                </div>

            )
        })
    };



    const renderPhimSapChieu = () => {
        return props.danhSachPhim.filter(item =>
            (Date.parse(item.ngayKhoiChieu) >= Date.parse('2020-01-01'))
        ).map((film, index) => {
            return (
                <div className="films_item" key={index}>
                    <div className="filmImage">
                        <div className="imgFilm"><img src={film.hinhAnh} alt="iconImage" /></div>
                        <div className="soonShow">
                            <span>Phim sắp chiếu</span>
                        </div>
                        <div className="overlayIcon">
                            <img className="imgIconPlay" src="./img/play-video.png" alt="iconImage" />
                        </div>
                    </div>
                    <div className="filmInfo">
                        <div className="filmInfo_title">
                            <span className="span_btn-red">C18</span>
                            <span className="filmInfo_text">{film.tenPhim}</span>
                            <p>110 phút</p>
                        </div>
                        <div className="filmInfo_btnBuy">
                            <button className="btn-comingSoon" >SẮP MỞ BÁN</button>
                        </div>
                    </div>
                </div>

            )
        })
    };

    return (
        <div>
            <div className="tieuDe">
                <button className={isToggleOn === 'dangChieu' ? "active" : "inactive"} onClick={() => setToggle('dangChieu')}>Đang Chiếu</button>
                <button className={isToggleOn === 'sapChieu' ? "active" : "inactive"} onClick={() => setToggle('sapChieu')}>Sắp Chiếu</button>
            </div>

            <div className="noiDung">
                <div id="phimDangChieu" className={isToggleOn === 'dangChieu' ? "divActive" : "divInActive"}>
                    <Slider {...settingsFilm}>
                        {renderPhimDangChieu()}
                    </Slider>
                </div>
                <div id="phimSapChieu" className={isToggleOn === 'sapChieu' ? "divActive" : "divInActive"}>
                    <Slider {...settingsFilm}>
                        {renderPhimSapChieu()}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default memo(DanhSachPhim);