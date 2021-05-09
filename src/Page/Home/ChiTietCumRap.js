import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { layLichChieuHeThongRapApiAction } from '../../redux/actions/QuanLyPhimActions';
import moment from 'moment';
import { Fragment } from 'react';

import "react-circular-progressbar/dist/styles.css";
import StarRating from './StarRating';
import ProgressBar from './ProgressBar';


export default function ChiTietCumRap(props) {
    const danhSachLichChieuHTR = useSelector(state => state.QuanLyPhimReducer.danhSachLichChieuHTR);
    const [reviewScore, setReviewScore] = useState(0);

    const dispatch = useDispatch();

    // useEffect(async () => {
    //     let maHeThongRap = props.match.params.maHeThongRap;
    //     dispatch(await layLichChieuHeThongRapApiAction(maHeThongRap));
    // },[dispatch]);
    
    useEffect(() => {
        async function fetchData() {
            let maHeThongRap = props.match.params.maHeThongRap;
          dispatch(await layLichChieuHeThongRapApiAction(maHeThongRap));
        }
        fetchData();
      }, [props.match.params.maHeThongRap,dispatch]); 


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    let min = 10;
    let max = 100;
    let range = min + Math.floor((Math.random()) * (max-min));

    useEffect(() =>{
        setReviewScore(range);
    },[])
    
    return (
        <section className="chiTietCumRap">
            <div className="container-fluid"></div>
            <div className="container pb-5">

                {/* NỘI DUNG CỤM RẠP   */}
                <div className="row rapSection">
                    <div className="col-12 col-sm-8 rap__noiDung">
                        <div className="row">
                            <div className="col-4 col-md-4 rap__noiDung-hinhAnh">
                                <img src="https://picsum.photos/300/300" alt="filmImage" />
                            </div>
                            <div className="col-8 col-md-8 rap__noiDung-thongTin">
                                {danhSachLichChieuHTR.map((htRap, indexHTR) => {
                                    return <Fragment key={indexHTR}>
                                        {
                                            htRap.lstCumRap.slice(0, 1).map((cumRap, index) => {
                                                return <Fragment key={index}>
                                                    <p className="tenCumRap">{cumRap.tenCumRap}</p>
                                                    <p className="diaChi">{cumRap.diaChi}</p>
                                                </Fragment>
                                            })
                                        }
                                    </Fragment>
                                })}
                                <button className="btn-muaVe">Mua vé</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 rap__danhGia">
                        <div className="bieuDo">
                        <ProgressBar
                                progress={reviewScore}
                                size={110}
                                strokeWidth={6}
                                circleOneStroke='rgba(0, 151, 245, 0.5)'
                                circleTwoStroke='rgba(206, 48, 23, 1)'
                            />
                        </div>
                        <StarRating value={reviewScore/10} />
                        <p className="luotDanhGia">
                            {Math.floor(Math.random()*100)} người đánh giá
                         </p>
                    </div>
                </div>

                {/* END OF NỘI DUNG PHIM   */}

                {/* LỊCH CHIẾU */}
                <div className="lichChieuSection">
                    <div className="row m-0">
                        <div className="col-12 col-sm-4">
                            <div className="nav flex-column nav-pills me-3 lichChieu__Rap-Icon" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                {danhSachLichChieuHTR.map((dsRap, indexDsRap) => {
                                    return dsRap.lstCumRap.map((cumRap, indexCR) => {
                                        let active = indexCR === 0 ? ' active' : '';
                                        return (
                                            <a key={indexCR} className={"nav-link" + active} id={cumRap.maCumRap + "-tab"} data-bs-toggle="pill" href={`#${cumRap.maCumRap}`}
                                                role="tab" aria-controls={cumRap.maCumRap} aria-selected="true">
                                                <div className="cumRapBox">
                                                    <div><img src="https://picsum.photos/300/300" alt="filmImage" /></div>
                                                    <div className="cumRapBox__chiTiet">
                                                        <p className="txtTenRap">{cumRap.tenCumRap}</p>
                                                        <p className="txtDiaChi">{cumRap.diaChi}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    })
                                })}

                            </div>
                        </div>

                        <div className="col-12 col-sm-8 lichChieu__Rap-SuatChieu">
                            <div className="tab-content lichChieu__content" id="v-pills-tabContent">

                                {danhSachLichChieuHTR.map((dsRap, indexDsRap) => {
                                    return dsRap.lstCumRap.map((cumRap, indexCR) => {
                                        let active = indexCR === 0 ? ' active' : '';
                                        return (
                                            <div key={indexCR} className={"tab-pane fade show" + active} id={cumRap.maCumRap} role="tabpanel" aria-labelledby={cumRap.maCumRap + "-tab"}>
                                                {cumRap.danhSachPhim?.slice(0, 12).map((dsPhim, indexDsPhim) => {
                                                    return (
                                                        <div className="row lichChieuItems ml-0 mr-0" key={indexDsPhim}>
                                                            <div className="col-2 col-sm-2 pr-0 lichChieuItems_hinhAnh">
                                                                <img src={dsPhim.hinhAnh} alt="filmImage" />
                                                            </div>
                                                            <div className="col-10 col-sm-10">
                                                                <p className="txtTenPhim">{dsPhim.tenPhim}</p>
                                                                <div className="row m-0 pb-2 suatChieu">
                                                                    {dsPhim.lstLichChieuTheoPhim.slice(0, 12).map((lichChieu, indexLC) => {
                                                                        return <NavLink to={'/chitietphongve/' + lichChieu.maLichChieu} key={indexLC} className="col-6 col-sm-6 col-md-4 col-lg-3 gioChieu">
                                                                            <button>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</button>
                                                                        </NavLink>
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        )

                                    })
                                })
                                }

                            </div>
                        </div>
                    </div>
                </div>

                {/* END OF LỊCH CHIẾU */}
            </div >
        </section >
    )
}
