import React, { useEffect, useMemo } from 'react';
import Style from "../../Css/main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimApiAction, layDanhSachRapApiAction } from "../../redux/actions/QuanLyPhimActions";

import Carousel from './Carousel';
import DanhSachPhim from './DanhSachPhim';
import DanhSachRap from './DanhSachRap';
import TinTuc from './TinTuc';
import UngDung from './UngDung';

export default function Home(props) {

    const danhSachPhim = useSelector(state => state.QuanLyPhimReducer.danhSachPhim);
    const danhSachRap = useSelector(state => state.QuanLyPhimReducer.danhSachRap);

    const dispatch = useDispatch();

    //PHIM
    useEffect(async () => {
        dispatch(await layDanhSachPhimApiAction());
    }, []);


    const danhSachPhimMemo = useMemo(() => danhSachPhim, [danhSachPhim]);

    //END OF PHIM

    //HỆ THỐNG RẠP VÀ LỊCH CHIẾU PHIM
    useEffect(async () => {
        dispatch(await layDanhSachRapApiAction());
    }, []);

    const danhSachRapMemo = useMemo(() => danhSachRap, [danhSachRap]);

    //END OF HỆ THỐNG RẠP VÀ LỊCH CHIẾU PHIM


   

    
    return (
        <section className="home" id="trangchu">
            {/* CAROUSEL */}
            <Carousel />
            {/* END OF CAROUSEL */}




            {/* DANH SÁCH PHIM */}
            <div id="lichChieu" className="dsPhim container">
                <DanhSachPhim danhSachPhim={danhSachPhimMemo} />
            </div>

            {/* END OF DANH SÁCH PHIM */}

            {/* HỆ THỐNG RẠP VÀ LỊCH CHIẾU PHIM */}
            <div id="cumRap" className="heThongRap container">
                <DanhSachRap danhSachRap={danhSachRapMemo} />
            </div>
            {/* END OF HỆ THỐNG RẠP VÀ LỊCH CHIẾU PHIM */}

            {/* TIN TỨC */}
           <TinTuc />
            {/* END OF TIN TỨC */}

              {/* ỨNG DỤNG */}
           <UngDung />
            {/* END OF ỨNG DỤNG */}

        </section >
    )
}
