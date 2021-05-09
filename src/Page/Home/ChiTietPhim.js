import React, { useEffect, useState } from 'react';
// import Style from "../../Css/main.css";
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietPhimApiAction } from '../../redux/actions/QuanLyPhimActions';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { Fragment } from 'react';
import StarRating from './StarRating';

import "react-circular-progressbar/dist/styles.css";
import ProgressBar from './ProgressBar';


export default function ChiTietPhim(props) {
    const chiTietPhim = useSelector(state => state.QuanLyPhimReducer.chiTietPhim);
    const [reviewScore, setReviewScore] = useState(0);

    const dispatch = useDispatch();

    // useEffect(async () => {
    //     let maPhim = props.match.params.maPhim;
    //     dispatch(await layChiTietPhimApiAction(maPhim));
    // }, []);

    useEffect(() => {
        async function fetchData() {
            let maPhim = props.match.params.maPhim;
            dispatch(await layChiTietPhimApiAction(maPhim));
        }
        fetchData();
    }, [props.match.params.maPhim, dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const danhGia = chiTietPhim.danhGia;
    useEffect(() => {
        if (danhGia === undefined) {
            setReviewScore(0);
        } else {
            setReviewScore(danhGia)
        }
    }, [danhGia])


    return (
        <section className="chiTietPhim" id="chiTiet__Phim">
            <div className="container-fluid" style={{ backgroundImage: `url(${chiTietPhim.hinhAnh}` }}></div>
            <div className="container pb-5">
                {/* NỘI DUNG PHIM   */}
                <div className="row phimSection">
                    <div className="col-sm-8 phim__noiDung">
                        <div className="row">
                            <div className="col-4 col-md-4 phim__noiDung-hinhAnh">
                                <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.hinhAnh} />
                            </div>
                            <div className="col-8 col-md-8 phim__noiDung-thongTin">
                                <p className="ngayChieu">{moment(chiTietPhim.ngayKhoiChieu).format('DD - MM - YYYY')}</p>
                                <p className="tenPhim">{chiTietPhim.tenPhim}</p>
                                {chiTietPhim.heThongRapChieu?.slice(0, 1).map((htRap, indexHTR) => {
                                    return <Fragment key={indexHTR}>
                                        {
                                            htRap.cumRapChieu?.slice(0, 1).map((cumRap, indexCR) => {
                                                return <Fragment key={indexCR}>
                                                    {cumRap.lichChieuPhim?.slice(0, 1).map((lichChieu, indexLC) => {
                                                        return <Fragment key={indexLC}>
                                                            <p className="thoiLuong">{lichChieu.thoiLuong} phút</p>
                                                            <NavLink to={'/chitietphongve/' + lichChieu.maLichChieu} className="btn-muaVe">Mua vé</NavLink>
                                                        </Fragment>

                                                    })}
                                                </Fragment>
                                            })
                                        }
                                    </Fragment>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 phim__danhGia">
                        <div className="bieuDo">
                            <ProgressBar
                                progress={reviewScore * 10}
                                size={110}
                                strokeWidth={6}

                                circleOneStroke='rgba(0, 172, 77, 0.4)'
                                circleTwoStroke='rgba(226, 230, 0, 1)'

                            />

                        </div>
                        <StarRating value={reviewScore} />
                        <p className="luotDanhGia">
                            {Math.floor(Math.random() * 100)} người đánh giá
                            </p>
                        <p style={{ color: "white" }}>Đánh giá: {reviewScore}</p>
                    </div>
                </div>
                {/* END OF NỘI DUNG PHIM   */}


                {/* LỊCH CHIẾU */}
                <div className="lichChieuSection">
                    <nav className="lichChieu__tieuDe my-4">
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-link active" id="lichChieu-tab" data-bs-toggle="tab" href="#lichChieu" role="tab" aria-controls="lichChieu" aria-selected="true">Lịch Chiếu</a>
                            <a className="nav-link" id="thongTin-tab" data-bs-toggle="tab" href="#thongTin" role="tab" aria-controls="thongTin" aria-selected="false">Thông Tin</a>
                        </div>
                    </nav>
                    <div className="tab-content lichChieu__Rap" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="lichChieu" role="tabpanel" aria-labelledby="lichChieu-tab">
                            <div className="row m-0">
                                <div className="col-12 col-sm-4 col-md-3">
                                    <div className="nav flex-column nav-pills me-3 lichChieu__Rap-Icon" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                                            let active = index === 0 ? ' active' : '';
                                            return (
                                                <a key={index} className={"nav-link" + active} id={heThongRap.maHeThongRap + "-tab"} data-bs-toggle="pill" href={`#${heThongRap.maHeThongRap}`}
                                                    role="tab" aria-controls={heThongRap.maHeThongRap} aria-selected="true">
                                                    <img src={heThongRap.logo} alt={heThongRap.logo} />
                                                    <span className="txtTenRap">{heThongRap.tenHeThongRap}</span>
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="col-12 col-sm-8 col-md-9 lichChieu__Rap-SuatChieu">
                                    <div className="tab-content lichChieu__content" id="v-pills-tabContent">
                                        {chiTietPhim.heThongRapChieu?.map((heThongRap, indexHTR) => {
                                            let active = indexHTR === 0 ? ' active' : '';
                                            return (
                                                <div key={indexHTR} className={"tab-pane fade show" + active}
                                                    id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby={heThongRap.maHeThongRap + "-tab"}>
                                                    {heThongRap.cumRapChieu?.map((cumRap, indexCR) => {
                                                        return <div className="cumRap" key={indexCR}>
                                                            <p className="txtTenCumRap">{cumRap.tenCumRap}</p>
                                                            <div className="row mx-0 pb-2">
                                                                {cumRap.lichChieuPhim?.slice(0, 8).map((lichChieu, indexLC) => {
                                                                    return <NavLink to={'/chitietphongve/' + lichChieu.maLichChieu} key={indexLC} className="col-4 col-sm-6 col-md-3 col-xl-2 gioChieu">
                                                                        <span>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</span>
                                                                    </NavLink>
                                                                })}
                                                            </div>
                                                        </div>
                                                    })}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="thongTin" role="tabpanel" aria-labelledby="thongTin-tab">
                            <div className="thongTinPhim">
                                <div className="row m-0 py-4 thongTinPhim__content">
                                    <div className="col-sm-4 ml-4 py-3">
                                        <div className="row mb-4 ">
                                            <div className="col-sm-5">Tên phim</div>
                                            <div className="col-sm-7">{chiTietPhim.tenPhim}</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-5">Ngày chiếu</div>
                                            <div className="col-sm-7">{moment(chiTietPhim.ngayKhoiChieu).format('DD-MM-YYYY')}</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-5">Đạo diễn</div>
                                            <div className="col-sm-7">CybersoftEdu</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-5">Diễn viên</div>
                                            <div className="col-sm-7">Cybersoft Students</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-5">Thể loại</div>
                                            <div className="col-sm-7">Technology</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-5">Đánh giá</div>
                                            <div className="col-sm-7">{chiTietPhim.danhGia}</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 ml-5 py-3">
                                        <p>Nội dung</p>
                                        <p className="text-justify">Trong lúc đang tham gia hoạt động khảo cổ ở một cuộc triễn lãm khủng long, Nobita tình cờ tìm thấy một viên hóa thạch và cậu tin rằng đây là trứng khủng long. Nobita liền mượn bảo bối thần kỳ "khăn trùm thời gian" của Doraemon để giúp viên hóa thạch trở lại thời của chúng nhưng ngay sau đó, quả trứng liền nở ra một cặp khủng long song sinh. Ngạc nhiên hơn hết, đây lại là loài khủng long mới hoàn toàn và chưa từng được phát hiện.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* END OF LỊCH CHIẾU */}
            </div>
        </section>
    )
}
