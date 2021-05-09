import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layLichChieuHeThongRapApiAction } from "../../redux/actions/QuanLyPhimActions";
import moment from 'moment';
import { NavLink } from 'react-router-dom';
// import { cleanup } from '@testing-library/react';
import { Fragment } from 'react';

function DanhSachRap(props) {
    let [maHeThongRap, setMaHeThongRap] = useState("BHDStar");
    let [key, setKey] = useState(0);

    const danhSachLichChieuHTR = useSelector(state => state.QuanLyPhimReducer.danhSachLichChieuHTR);
    const dispatch = useDispatch();

    // useEffect(async () => {
    //     dispatch(await layLichChieuHeThongRapApiAction(maHeThongRap));
    // }, [maHeThongRap]);

    useEffect(() => {
        async function fetchData() {
            dispatch(await layLichChieuHeThongRapApiAction(maHeThongRap));
        }
        fetchData();
    }, [maHeThongRap,dispatch]);

    const chonRap = (maHeThongRap, index) => {
        setMaHeThongRap(maHeThongRap);
        setKey(index);
    }


    const renderDanhSachRap = () => {
        return props.danhSachRap.map((rap, index) => {
            let classActive = key === index ? 'active' : 'unactive';
            return (
                <div className="heThongRapIcon_items" key={index} >
                    <button className={classActive} onClick={() => chonRap(rap.maHeThongRap, index)}><img src={rap.logo} alt="logoIcon" /></button>
                </div>
            )
        })
    }
    const renderDanhSachCumRap = () => {
        return danhSachLichChieuHTR.map((dsRap, indexDsRap) => {
           
            return dsRap.lstCumRap.map((rap, indexRap) => {
                let active = indexRap === 0 ? ' active' : '';

                return (
                   <Fragment key={indexRap}  >
                        <div className={"nav-link" + active + " heThongCumRap_items"} id={rap.maCumRap + "-tab"} data-bs-toggle="pill" href={`#${rap.maCumRap}`} role="tab" aria-controls={rap.maCumRap} aria-selected="true">
                            <p className="txtTenCumRap">{rap.tenCumRap}</p>
                            <p className="txtDiaChi">{rap.diaChi}</p>
                        </div>
                         <NavLink className="txtLink" to={"/chitietcumrap/" + dsRap.maHeThongRap}>[Chi tiết]</NavLink>
                  </Fragment>
                )
            })



        })
    }

    return (
        <div className="row">
            <div className="col-2 col-sm-1 heThongRapIcon">
                {renderDanhSachRap()}
            </div>
            <div className="col-10 col-sm-4 heThongCumRap">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {renderDanhSachCumRap()}
                </div>
            </div>
            <div className="col-12 col-sm-7 lichChieu ">
                <div className="tab-content" id="v-pills-tabContent">
                    {danhSachLichChieuHTR.map((dsRap, indexDsRap) => {
                        return dsRap.lstCumRap.map((rap, indexRap) => {
                            let active = indexRap === 0 ? ' active' : '';
                            return (
                                <div key={indexRap} className={"tab-pane fade show" + active} id={rap.maCumRap} role="tabpanel" aria-labelledby={rap.maCumRap + "-tab"}>
                                    {rap.danhSachPhim?.slice(0, 7).map((dsPhim, indexDsPhim) => {
                                        return (
                                            <div className="row lichChieuItems m-0" key={indexDsPhim}>

                                                <div className="col-2 col-sm-2 pr-0 lichChieuItems_hinhAnh">
                                                    <img src={dsPhim.hinhAnh} alt="filmImage" />
                                                </div>
                                                <div className="col-10 col-sm-10" >
                                                    <p className="txtTenPhim">{dsPhim.tenPhim}</p>
                                                    <div className="row mx-0 pb-2 suatChieu">
                                                        {dsPhim.lstLichChieuTheoPhim?.slice(0, 10).map((lichChieu, indexLC) => {
                                                            return (
                                                                <NavLink to={'/chitietphongve/' + lichChieu.maLichChieu} key={indexLC} className="col-4 col-sm-6 col-md-4 col-lg-3 gioChieu">
                                                                    <button>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</button>
                                                                </NavLink>

                                                            )
                                                        })
                                                        }
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            )
                        })
                    })}
                </div>
            </div>
        </div>
    )
}

export default memo(DanhSachRap);