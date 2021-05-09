import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { capNhatThongTinCaNhan } from '../../redux/actions/QuanLyNguoiDungActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
const signupUserSchema = yup.object().shape({
    hoTen: yup.string().required('*Họ tên không được bỏ trống!').matches(/^[A-Za-z ]+$/, '*Họ tên không hợp lệ! '),
    taiKhoan: yup.string().required('*Tài khoản không được bỏ trống!'),
    matKhau: yup.string().required('*Mật khẩu không được bỏ trống!'),
    email: yup.string().required('*Email không được bỏ trống!').email('*Email không hợp lệ!'),
    soDt: yup.string().required('*Số điện thoại không được bỏ trống!').matches(/^[0-9]+$/, '*Số điện thoại không hợp lệ! '),
})
export default function CapNhat() {
    const dispatch = useDispatch();
    const stateFrom = useSelector(state => state.QuanLyNguoiDungReducer.stateForm);
    const handleSubmit = async (values) => {
        dispatch(await capNhatThongTinCaNhan(values))
        console.log(values);
    }

    return <>
        <div className='CapNhat'>
            <a className="titleModal" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ color: 'red' }}>
                Cập nhật
            </a>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cập nhật thông tin cá nhân</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <Formik
                                initialValues={{
                                    hoTen: stateFrom.value.hoTen,
                                    taiKhoan: stateFrom.value.taiKhoan,
                                    matKhau: stateFrom.value.matKhau,
                                    email: stateFrom.value.email,
                                    soDt: stateFrom.value.soDT,
                                    maNhom: stateFrom.value.maNhom,
                                    maLoaiNguoiDung: stateFrom.value.maLoaiNguoiDung,
                                }}
                                validationSchema={signupUserSchema}
                                onSubmit={handleSubmit}
                                render={(formikProps) => (
                                    <Form className='update__form' >
                                        <div>
                                            <div className="update__form-input">
                                                <label htmlFor='taiKhoan'>Tài khoản</label>
                                                <Field disabled id='taiKhoan' name='taiKhoan' className="form-control" placeholder="Tài khoản" onChange={formikProps.handleChange} />
                                            </div>
                                            <div className="update__form-input">
                                                <label htmlFor='matKhau'>Mật khẩu</label>
                                                <Field id='matKhau' type='text' name='matKhau' className="form-control" placeholder="Mật khẩu" onChange={formikProps.handleChange} />
                                                <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="matKhau" /></span>
                                            </div>
                                            <div className="update__form-input">
                                                <label htmlFor='hoTen'>Họ tên</label>
                                                <Field id='hoTen' types='hoTen' name='hoTen' type="text" className="form-control" placeholder="Họ tên" onChange={formikProps.handleChange} />
                                                <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="hoTen" /></span>
                                            </div>
                                            <div className="update__form-input">
                                                <label htmlFor='email'>Email</label>
                                                <Field id='email' types='email' name='email' className="form-control" placeholder="Email" onChange={formikProps.handleChange} />
                                                <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="email" /></span>
                                            </div>
                                            <div className="update__form-input">
                                                <label htmlFor='sdt'>Số điện thoại</label>
                                                <Field id='sdt' types='soDT' name='soDt' className="form-control" placeholder="Số điện thoại" onChange={formikProps.handleChange} />
                                                <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="soDt" /></span>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-success" >Cập nhật</button>
                                    </Form>)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
