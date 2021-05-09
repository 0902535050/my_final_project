import './App.css';
import React, { useState, useEffect } from 'react';
import * as ReactBootStrap from 'react-bootstrap';


import { Route, Switch } from 'react-router-dom';

import Home from './Page/Home/Home';
import { HomeTemplate } from './Template/HomeTemplate';
import ChiTietPhongVe from './Page/Home/ChiTietPhongVe';
import ChiTietPhim from './Page/Home/ChiTietPhim';
import ChiTietCumRap from './Page/Home/ChiTietCumRap';

import DangKy from './Page/User/DangKy';
import DangNhap from './Page/User/DangNhap';
import ThongTinCaNhan from './Page/User/ThongTinCaNhan';
import Axios from 'axios';

//eltr
import { AdminTemplate } from './Template/AdminTemplate';
import Admin from './Page/Admin/Admin';
import QuanLyNguoiDung from './Page/Admin/User/QuanLyNguoiDung'
import QuanLyPhim from './Page/Admin/Film/QuanLyPhim'
import { Temlay } from './Template/Temlay';
import { useSelector } from 'react-redux'


function App() {
  // const [danhSachPhim, setDanhSachPhim] = useState(null)
  const [loading, setLoading] = useState(false);


  const fetchData = async () => {
    try {
      const data = await Axios
        .get("https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
        .then(result => {
          setLoading(true);
        });

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);


  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

  return (

    <>
      {!loading ? <ReactBootStrap.Spinner className="spinner text-danger" animation="border" /> :
        <Switch>
          <HomeTemplate exact path="/home" Component={Home} />
          <HomeTemplate exact path="/chitietphim/:maPhim" Component={ChiTietPhim} />
          <HomeTemplate exact path="/chitietcumrap/:maHeThongRap" Component={ChiTietCumRap} />
          {/* <HomeTemplate exact path="/chitietphongve/:maLichChieu" Component={ChiTietPhongVe} /> */}
          <Route exact path="/chitietphongve/:maLichChieu" component={ChiTietPhongVe} />
          <Route exact path='/dangky' component={DangKy} />
          <Route exact path='/dangnhap' component={DangNhap} />
          <Route exact path='/thongtincanhan' component={ThongTinCaNhan} />
          <HomeTemplate exact path="/" Component={Home} />


          {/* eltr */}

          {userLogin.maLoaiNguoiDung == "QuanTri" ?
            <Switch>
              <AdminTemplate exact path='/admin' Component={Admin} />,
            <AdminTemplate exact path='/admin/quanlynguoidung' Component={QuanLyNguoiDung} />,
            <AdminTemplate exact path='/admin/quanlyphim' Component={QuanLyPhim} />
            </Switch>
            : 'not'}



        </Switch>
      }
    </>
  );
}

export default App;
