import React from 'react';
import Slider from "react-slick";

export default function UngDung() {
    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    let openApp = () => {
        window.open("https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197");
    }
    return (
        <div className='ungDung' id='ungDung'>
        <div className="ungDung__header" style={{ background: 'url("/img/application/bg.png") center center / cover' }}></div>
        <div className='ungDung__background' style={{ background: 'url("/img/application/app_backGround.jpg")' }}>
            <div className='myContainer'>
                <div className='ungDung__background-item'>
                    <div className='item__left'>
                        <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
                        <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                        <button className='btn' onClick={() => openApp()}>App miễn phí - Tải về ngay!</button>
                        <br />
                        <span>TIX có hai phiên bản <a href='https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197'><u>IOS</u></a> & <a href='https://play.google.com/store/apps/details?id=vn.com.vng.phim123'><u>Android</u></a></span>
                    </div>
                    <div className='item__right'>
                        <img className='item__right-phone' src='/img/application/app_phoneBG.png' alt="icon" />
                        <div className='item__right-slick'>
                            <Slider {...settings}>
                                <div>
                                    <img src='/img/application/app_phone1.jpg' alt="icon" />
                                </div>
                                <div>
                                    <img src='/img/application/app_phone2.jpg' alt="icon" />
                                </div>
                                <div>
                                    <img src='/img/application/app_phone3.jpg' alt="icon" />
                                </div>
                                <div>
                                    <img src='/img/application/app_phone4.jpg' alt="icon" />
                                </div>
                                <div>
                                    <img src='/img/application/app_phone5.jpg' alt="icon" />
                                </div>
                                <div>
                                    <img src='/img/Application/app_phone6.jpg' alt="icon" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
