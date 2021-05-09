import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { dangKyApiAction } from '../../redux/actions/QuanLyNguoiDungActions';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
const signupUserSchema = yup.object().shape({
    hoTen: yup.string().required('*Họ tên không được bỏ trống!').matches(/^[A-Za-z ]+$/, '*Họ tên không hợp lệ! '),
    taiKhoan: yup.string().required('*Tài khoản không được bỏ trống!'),
    matKhau: yup.string().required('*Mật khẩu không được bỏ trống!'),
    email: yup.string().required('*Email không được bỏ trống!').email('*Email không hợp lệ!'),
    soDt: yup.string().required('*Số điện thoại không được bỏ trống!').matches(/^[0-9]+$/, '*Số điện thoại không hợp lệ! ').min(10, '*Số điện thoại từ 10 đến 11 số! ').max(11, '*Số điện thoại từ 9 đến 11 số! ')
})
export default function DangKy() {
    const dispatch = useDispatch()

    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        window.onresize = function () {
            setHeight(window.innerHeight);
        }
    }, []);
    const handlesSubmit = async (values) => {
        dispatch(await dangKyApiAction(values))
    }
    const [onOff, setOnOff] = useState(true)
    let onOffPassword = () => {
        setOnOff(!onOff)
    }
    return (
        <div className='signUp' style={{ backgroundImage: "url('./img/bgDangKy.jpg')", height }} >
            <Formik
                initialValues={{
                    hoTen: '',
                    taiKhoan: '',
                    matKhau: '',
                    email: '',
                    soDt: '',
                    maNhom: 'GP01',
                    maLoaiNguoiDung: 'KhachHang',
                }}
                validationSchema={signupUserSchema}
                onSubmit={handlesSubmit}
                render={(formikProps) => (
                    <Form className='signUp__form' >
                        <div className='signUp__form-logo'>
                            <a href='/'><img className='logo' src='./img/Header/logo.png' /></a>
                        </div>
                        <h1 className='signUp__form-title'>Đăng ký</h1>
                        <div className="signUp__form-input ">
                            <div className='formSigup'>
                                <i className="fa fa-user-alt"></i>
                                <Field types='hoTen' name='hoTen' type="text" className="form-control" aria-describedby="ho" placeholder="Họ tên" onChange={formikProps.handleChange} />
                            </div>
                            <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="hoTen" /></span>
                        </div>
                        <div className="signUp__form-input">
                            <div className='formSigup'>
                                <i className="fa fa-user-alt"></i>
                                <Field name='taiKhoan' className="form-control" aria-describedby="taiKhoan" placeholder="Tài khoản" onChange={formikProps.handleChange} />
                            </div>
                            <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="taiKhoan" /></span>
                        </div>
                        <div className="signUp__form-input">
                            <div className='formSigup'>
                                <i className="fa fa-lock"></i>
                                <Field type={onOff ? 'password' : 'text'} name='matKhau' className="form-control" aria-describedby="matKhau" placeholder="Mật khẩu" onChange={formikProps.handleChange} />
                                <div className='onOff__password' id='show' onClick={() => onOffPassword()}>
                                    <i className="fa fa-eye" style={{ display: `${onOff ? '' : 'none'}` }}></i>
                                    <i class="fa fa-eye-slash" style={{ display: `${onOff ? 'none' : 'block'}` }}></i>
                                </div>
                            </div>
                            <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="matKhau" /></span>
                        </div>
                        <div className="signUp__form-input form__contact">
                            <div style={{ width: '100%' }}>
                                <div className='formSigup'>
                                    <i className="fa fa-envelope"></i>
                                    <Field types='email' name='email' className="form-control" aria-describedby="email" placeholder="Email" onChange={formikProps.handleChange} />
                                </div>
                                <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="email" /></span>
                            </div>
                            <div style={{ width: '100%' }}>
                                <div className='formSigup'>
                                    <i className="fa fa-mobile-alt"></i>
                                    <Field types='soDt' name='soDt' className="form-control form__contact1" aria-describedby="soDienThoai" placeholder="Số điện thoại" onChange={formikProps.handleChange} />
                                </div>
                                <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="soDt" /></span>
                            </div>
                        </div>
                        <div className="signUp__form-input ">
                            <button className='btn' type='submit'>Đăng ký</button>
                        </div>
                        <div className="signUp__form-note">
                            <span>Bạn dã có tài khoản? <NavLink to='/dangnhap'>Đăng nhập</NavLink></span>
                        </div>
                    </Form>)} />
        </div>
    )
}

