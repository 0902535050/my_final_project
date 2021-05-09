import React, { useEffect, useState } from 'react'
import Axios from 'axios'
// import DrawerForm from './DrawerForm'

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export default function ThemFilm() {

    const [phim, setPhim] = useState({
        hinhAnh: {},
        // ngayKhoiChieu: {},
        maPhim: '',
        danhGia: '',
        biDanh: '',
        tenPhim: '',
        maNhom: 'GP01',
        moTa: '',
        trailer: '',

    })


    const [hinh, setHinh] = useState({
        profileImg: 'https://superawesomevectors.com/wp-content/uploads/2017/07/film-reel-flat-vector-icon-800x566.jpg'
    })

    const imageHandler = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setHinh({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const handleChange = (e) => {
        let { value, name } = e.target;

        if (name === 'hinhAnh') {
            let newPhim = { ...phim, hinhAnh: e.target.files[0] };
            setPhim(newPhim)
            console.log(newPhim);

            //chỗ hiện hình ảnh
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setHinh({ profileImg: reader.result })
                }
            }
            reader.readAsDataURL(e.target.files[0])

        }
        else {

            // Thay đổi giá trị thuộc tính đang onChange
            let newPhim = { ...phim, [name]: value };
            // Set lại state của userLogin = giá trị mới
            setPhim(newPhim)
            console.log('newPhim');
            console.log(newPhim);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        var form_data = new FormData()

        for (var key in phim) {
            console.log(key, phim[key])
            form_data.append(key, phim[key])
        }
        e.preventDefault()

        Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',
            method: 'POST',
            data: form_data
        }).then(res => {
            console.log(res)
            console.log("Thêm phim thành công")
            alert("Thêm phim thành công")
        }).catch(err => {
            console.log("Thêm phim thất bại")
            alert("Thêm phim thất bại")
            alert(err.response.data)
        })

    }

    return (
        // border-bottom border-primary
        <div>

            <form onSubmit={handleSubmit} className="p-3">
                <div className="form-group ">
                    <h6 className="font-weight-light" style={{ padding: 0 }} >Hình ảnh</h6>

                    <div className="border text-center">
                        {/* <img src={hinh.profileImg} style={{ height: 240, width: 185 }} /> */}
                        <img src={hinh.profileImg} style={{ width: '100%' }} />
                    </div>

                    <input type="file" name="hinhAnh" onChange={handleChange} />
                </div>
                <div className="d-flex ">
                    <div>
                        <div className=" form-group ">
                            <h6 className="font-weight-light" style={{ padding: 0 }}>Mã phim</h6>
                            <input type="text" className="form-control " name="maPhim" onChange={handleChange} />
                        </div>
                        <div className=" form-group ">
                            <h6 className="font-weight-light" style={{ padding: 0 }}>Tên phim</h6>
                            <input type="text" className="form-control " name="tenPhim" onChange={handleChange} />
                        </div>
                        <div className=" form-group ">
                            <h6 className="font-weight-light" style={{ padding: 0 }}>Bí danh</h6>
                            <input type="text" className="form-control " name="biDanh" onChange={handleChange} />
                        </div>

                    </div>

                    <div className="t">

                        <div className=" form-group ">
                            <h6 className="ml-5 font-weight-light" style={{ padding: 0 }}>Đánh giá</h6>
                            <input type="text" className="ml-5 form-control " name="danhGia" onChange={handleChange} />
                        </div>

                        <div className=" form-group ">
                            <h6 className="ml-5 font-weight-light" style={{ padding: 0 }}>Mã nhóm</h6>
                            <input type="text" className="ml-5 form-control " name="maNhom" value="GP01" onChange={handleChange} placeholder="GP01" disabled />
                        </div>
                        <div className=" form-group ">
                            <h6 className="ml-5 font-weight-light" style={{ padding: 0 }}>Trailer</h6>
                            <input type="text" className="ml-5 form-control " name="trailer" onChange={handleChange} />
                        </div>

                    </div>
                </div>
                <div>
                    <h6 className=" font-weight-light" style={{ padding: 0 }}>Mô tả</h6>
                    <textarea className="form-control text-overflow " rows="5" cols="13" name="moTa" onChange={handleChange} />
                </div>
                <button className="btn btn-secondary mt-5" type="reset"><i className="fa fa-sync"></i></button>
                <button className="btn btn-outline-success mt-5  w-100" >Thêm</button>

            </form>


        </div>)
}
