import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { datVeApiAction, layThongTinPhongVeApiAction } from '../../redux/actions/QuanLyPhimActions';
import { datGheAction } from '../../redux/actions/QuanLyPhimActions';
import screen from '../../assets/screen.png';
import { Fragment } from 'react';
import { USER_LOGIN } from '../../Util/Config';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

export default function ChiTietPhongVe(props) {
    const thongTinPhongVe = useSelector(state => state.QuanLyPhimReducer.thongTinPhongVe);
    const danhSachGheDangDat = useSelector(state => state.QuanLyPhimReducer.danhSachGheDangDat);
    const [time, setTime] = useState({ minutes: 0, seconds: 0 });
    const [over, setOver] = useState(false);

    const dispatch = useDispatch();
    // useEffect(async () => {
    //     let maLichChieu = props.match.params.maLichChieu;
    //     dispatch(await layThongTinPhongVeApiAction(maLichChieu));
    // }, []);
    
    useEffect(() => {
        async function fetchData() {
            let maLichChieu = props.match.params.maLichChieu;
            dispatch(await layThongTinPhongVeApiAction(maLichChieu));
        }
        fetchData();
      }, [props.match.params.maLichChieu,dispatch]); 

    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        window.onresize = function () {
            setHeight(window.innerHeight);
        }
    }, [height]);

    const start = () => {
        if (over) return;
        if (time.minutes === 0 && time.seconds === 0) {
            setOver(true);
            swal("Hết thời gian giữ ghế vui lòng đặt lại!", {
                buttons: {
                    cancel: "Thoát!",
                    ok: "Đặt lại vé",
                },
            })
                .then((value) => {
                    switch (value) {
                        case "ok":
                            reset();
                            break;

                        default:
                            props.history.push('/home');
                    }
                });
        }
        else if (time.seconds === 0)
            setTime({
                minutes: time.minutes - 1,
                seconds: 59
            });
        else
            setTime({
                minutes: time.minutes,
                seconds: time.seconds - 1
            });
    };
    const reset = () => {
        setTime({
            minutes: 2,
            seconds: 0
        });
        setOver(false);
    };

    useEffect(() => {
        if(thongTinPhongVe.danhSachGhe != null){
            let timerID = setInterval(() => start(), 1000);
             return () => clearInterval(timerID);
            }
    }, [start]);

    useEffect(() => {
       setTime({ minutes: 2, seconds: 0 })
    }, []);

    const renderCountDown = () => {
        return (
            <>
                <p className="text">Thời gian giữ ghế</p>
                <p className="time">{`${time.minutes.toString().padStart(2, '0')}:
             ${time.seconds.toString().padStart(2, '0')}`}</p>
            </>
        )
    }

    let tongTien = danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
        return tongTien += gheDangDat.giaVe
    }, 0)

    let disable = (tongTien === 0) ? 'disable' : '';
    let cursor = (tongTien === 0) ? 'no-drop' : '';
    let backgroundColor = (tongTien === 0) ? '#cfcfcf' : '#fb4226';
    let opacity = (tongTien === 0) ? '0.7' : '';
    let mangSapXepGheDangDat = danhSachGheDangDat.sort((ghe, gheTT) => {
        return ghe.stt - gheTT.stt;
    })
    return (
        <section className="container-fluid chiTietPhongVe">
            <div className="chiTietPhongVe__content">
                <div className="chiTietPhongVe__manHinh">
                    {/* hien thi thong tin phong ve */}
                    <div className="thongTin__Rap">
                        <div className="thongTin__Rap-content">

                            <div> <img src={thongTinPhongVe.thongTinPhim?.hinhAnh} alt="filmImage" /></div>
                            <div className="thongTin__Rap-diaChi">
                                <span className='ten__Rap'>{thongTinPhongVe.thongTinPhim?.tenCumRap}</span>
                                <br />
                                <span className='dia__Chi'>{thongTinPhongVe.thongTinPhim?.diaChi}</span>
                            </div>
                        </div>
                        <div className="thongTin__Rap-timeOut" >
                            {renderCountDown()}
                        </div>
                    </div>
                    <div className="manHinh">
                        <img src={screen} alt="screen" />
                    </div>
                    <div className="danhSachGhe">
                        {thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
                            let classGheVip = ghe.loaiGhe === 'Thuong' ? '' : 'gheVip';
                            let classGheDaDat = ghe.daDat ? 'gheDaDat' : '';
                            let disable = ghe.daDat ? 'disable' : '';
                            let noiDungBtn = ghe.daDat ? 'X' : ghe.stt;
                            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => ghe.maGhe === gheDangDat.maGhe)

                            let classGheDangDat = indexGheDangDat !== -1 ? 'gheDangDat' : '';
                            return <Fragment key={index}>

                                <button onClick={() => {
                                    if (danhSachGheDangDat.length <= 5) {
                                        dispatch(datGheAction(ghe.maGhe, ghe.stt, ghe.giaVe));
                                    } else {
                                        if (indexGheDangDat !== -1) {
                                            dispatch(datGheAction(ghe.maGhe, ghe.stt, ghe.giaVe));
                                        } else {
                                            swal({ text: "Mỗi booking chỉ tối đa 6 ghế!" });
                                        }
                                    }
                                }}
                                    disabled={`${disable}`} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>{noiDungBtn}</button>
                                {(index + 1) % 16 === 0 ? <br /> : ''}
                            </Fragment>
                        })}

                    </div>
                    <div className='loaiGhe'>
                        <div className='loaiGhe__item'>
                            <span className='ghe'></span>
                            <span>Ghế thường</span>
                        </div>
                        <div className='loaiGhe__item'>
                            <span className='ghe gheVip'></span>
                            <span>Ghế VIP</span>
                        </div>
                        <div className='loaiGhe__item'>
                            <span className='ghe gheDaDat'>X</span>
                            <span>Ghế đã được đặt</span>
                        </div>
                        <div className='loaiGhe__item'>
                            <span className='ghe gheDangDat'></span>
                            <span>Ghế đang chọn</span>
                        </div>
                    </div>
                </div>
                <div className="chiTietPhongVe__thongTin" style={{ height }}>
                    <div className="thongTin__tongTien">{danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                        return tongTien += gheDangDat.giaVe
                    }, 0).toLocaleString()} VND
                    </div>
                    <hr />
                    <div className="m-0 d-flex">
                        <div className="thongTin_hinhAnh">
                            <img src={thongTinPhongVe.thongTinPhim?.hinhAnh} alt='phimImage' />
                        </div>
                        <div className="thongTin__phim">
                            <h4>{thongTinPhongVe.thongTinPhim?.tenPhim}</h4>
                            <h6>{thongTinPhongVe.thongTinPhim?.tenCumRap} - {thongTinPhongVe.thongTinPhim?.tenRap}</h6>
                            <p>{thongTinPhongVe.thongTinPhim?.ngayChieu} - {thongTinPhongVe.thongTinPhim?.gioChieu}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="thongTin_ghe">
                        <div><span>Ghế: </span> {
                            mangSapXepGheDangDat?.map((gheDangDat, index) => {
                                return <span key={index} className='viTriGhe'>{gheDangDat.stt} &nbsp; </span>
                            })}
                        </div>
                        <div className='tienGhe'>
                            {danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                return tongTien += gheDangDat.giaVe
                            }, 0).toLocaleString()} đ
                        </div>
                    </div>
                    <hr />
                    <button style={{ cursor: `${cursor}`, backgroundColor: `${backgroundColor}`, opacity: `${opacity}` }} disabled={`${disable}`} className='btn-muaVe' onClick={async () => {
                        if (localStorage.getItem(USER_LOGIN)) {
                            let user = JSON.parse(localStorage.getItem(USER_LOGIN))
                            let objectDatVe = {
                                'maLichChieu': props.match.params.maLichChieu,
                                'danhSachVe': danhSachGheDangDat,
                                'taiKhoanNguoiDung': user.taiKhoan
                            }
                            dispatch(await datVeApiAction(objectDatVe))
                            .then((result) => {
                                Swal.fire('Thông báo', result.message, result.status);
                                if(result.code === 200){
                                    dispatch({type: "DAT_VE_THANH_CONG"});
                                }
                                setTimeout(function(){ props.history.push('/home')},4000)
                               
                            });
                            
                        } else {
                             props.history.push('/dangnhap')
                        }
                    }}>Đặt Vé</button>
                </div>
            </div>
        </section >
    )
}
