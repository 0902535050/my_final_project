import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dangNhapApiAction } from '../../redux/actions/QuanLyNguoiDungActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
const loginUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('*Tài khoản không được bỏ trống!'),
    matKhau: yup.string().required('*Mật khẩu không được bỏ trống!'),
})
export default function DangNhap() {

    const dispatch = useDispatch()
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        window.onresize = function () {
            setHeight(window.innerHeight);
        }
    }, []);
    const handleSubmit = async (values) => {
        dispatch(await dangNhapApiAction(values))
    }
    const [onOff, setOnOff] = useState(true)
    let onOffPassword = () => {
        setOnOff(!onOff)
    }
    return (
        <div className='login' style={{ backgroundImage: "url('./img/bgDangKy.jpg')", height, color: 'white' }}>
            <Formik initialValues={{
                taiKhoan: '',
                matKhau: '',
            }}
                validationSchema={loginUserSchema}
                onSubmit={handleSubmit}
                render={(formikProps) => (
                    <Form className='login__form'>
                        <div className='login__form-logo '>
                            <a href='/'><img className='logo' alt='...' src='./img/Header/logo.png' /></a>
                        </div>
                        <h1 className='login__form-title'>Đăng nhập</h1>
                        <div className="login__form-input">
                            <div className='formLogin'>
                                <i className="fa fa-user-alt"></i>
                                <Field name='taiKhoan' className="form-control" aria-describedby="taiKhoan" placeholder="Tài khoản" onChange={formikProps.handleChange} />
                            </div>
                            <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="taiKhoan" /></span>
                        </div>
                        <div className="login__form-input">
                            <div className='formLogin'>
                                <i className="fa fa-lock"></i>
                                <Field type={onOff ? 'password' : 'text'} name='matKhau' className="form-control" aria-describedby="matKhau" placeholder="Mật khẩu" onChange={formikProps.handleChange} />
                                <div id='show' onClick={() => onOffPassword()}>
                                    <i className="fa fa-eye" style={{ display: `${onOff ? '' : 'none'}` }}></i>
                                    <i className="fa fa-eye-slash" style={{ display: `${onOff ? 'none' : 'block'}` }}></i>
                                </div>
                            </div>
                            <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="matKhau" /></span>
                        </div>
                        <div className="login__form-remember">
                            <div className='remember__left'>
                                <input id='remember' type='checkbox' className='mr-1' />
                                <label htmlFor="remember" style={{ margin: 0 }}>Ghi nhớ đăng nhập</label>
                            </div>
                            <div className='remember__right'>
                                <a href='/'>Quên mật khẩu?</a>
                            </div>

                        </div>
                        <div className="login__form-input ">
                            <button className='btn' type='submit'>Đăng nhập</button>
                        </div>
                        <div className="login__form-note">
                            <span>Bạn chưa có tài khoản?<NavLink to='/dangky'> Đăng ký</NavLink></span>
                        </div>
                    </Form>)} />
        </div>
    )
}
