import React, { useState } from 'react'
import Axios from 'axios'
import { ACCESSTOKEN } from '../../../Util/Config'
import { useDispatch } from 'react-redux';



export default function ThemNguoiDung() {

    const [user, setUser] = useState({
        taiKhoan: '',
        email: '',
        matKhau: '',
        maNhom: 'GP01',
        soDt: '',
        maLoaiNguoiDung: 'KhachHang',
    })

    const handleChange = (e) => {
        let { value, name } = e.target;
        // Thay đổi giá trị thuộc tính đang onChange
        let newUser = { ...user, [name]: value };
        // Set lại state của userLogin = giá trị mới
        setUser(newUser)
        console.log(newUser);
    }

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        //chặn sự kiện load lại
        e.preventDefault()

        var form_data = new FormData()

        for (var key in user) {
            console.log(key, user[key])
            form_data.append(key, user[key])
        }
        e.preventDefault()

        Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
            // data: form_data,
            headers: { Authorization: 'Bearer ' + localStorage.getItem(ACCESSTOKEN) },
            data: { taiKhoan: `${user.taiKhoan}`, matKhau: `${user.matKhau}`, email: `${user.email}`, soDt: `${user.soDt}`, maNhom: `${user.maNhom}`, maLoaiNguoiDung: `${user.maLoaiNguoiDung}`, hoTen: `${user.hoTen}` },
            method: 'POST',
        }).then(res => {
            console.log(res)
            alert("them thanh cong")
            console.log("ssssssssssssssssssssssssssssssssssss")
        }).catch(err => {
            alert(err.response.data)
            alert("Thêm người dùng thất bại")
            console.log("Thêm người dùng thất bại")
        })


    }

    return (
        // border-bottom border-primary
        <form onSubmit={handleSubmit}>
            <div className="d-flex ">
                <div className="">
                    <div className="mr-5 form-group fw-bold ">
                        <h6 className="font-weight-light" style={{ padding: 0 }}>Tài khoản</h6>
                        <input type="text" className="form-control " placeholder="Tài Khoản" name="taiKhoan" onChange={handleChange} />
                    </div>
                    <div className="mr-5 form-group ">
                        <h6 className="font-weight-light" style={{ padding: 0 }}>Mật khẩu</h6>
                        <input type="text" className="form-control " placeholder="Mật Khẩu" name="matKhau" onChange={handleChange} />
                    </div>
                    <div className="mr-5 form-group ">
                        <h6 className="font-weight-light" style={{ padding: 0 }}>Họ tên</h6>
                        <input type="text" className="form-control " placeholder="Họ Tên" name="hoTen" onChange={handleChange} />
                    </div>
                </div>

                <div className="">

                    <div className="ml-5 form-group ">
                        <h6 className="font-weight-light" style={{ padding: 0 }}>Email</h6>
                        <input type="text" className="form-control " placeholder="Email" name="email" onChange={handleChange} />
                    </div>
                    <div className="ml-5 form-group ">
                        <h6 className="font-weight-light" style={{ padding: 0 }}>Số điện thoại</h6>
                        <input type="text" className="form-control " placeholder="Số Điện Thoại" name="soDt" onChange={handleChange} />
                    </div>
                    <div className="ml-5 ">
                        <h6 className="font-weight-light" style={{ padding: 0 }}>Loại người dùng</h6>
                        <select name="" name="maLoaiNguoiDung" class="form-control" onChange={handleChange} >
                            <option value="KhachHang">Khách hàng</option>
                            <option value="QuanTri">Admin</option>
                        </select>
                    </div>
                </div>
            </div>

            <button className="btn btn-danger mt-5 w-100" type="submit">Thêm</button>
        </form>
    )
}
