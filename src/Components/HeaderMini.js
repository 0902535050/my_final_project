import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2';
export default function HeaderMini() {
    const userLogin = useSelector(state => state.QuanLyNguoiDungReducer.userLogin);
    const logOut = () => {
        Swal.fire({
            title: 'Bạn có chắc muốn đăng xuất?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Có',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Hủy'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                window.location.href = '/';
            }
        })
    }
    return (
        <div className='headerMini' id='header'>
            <div className='container-fluid'>
                <div className='headerMini__menu'>
                    <div className='header__menu-logo'>
                        <a href='/'><img className='logo' src='/img/Header/logo.png' /></a>
                    </div>
                    <div className='header__menu-right'>
                        <div className='header__menu-user'>
                            <div className='user__item closeUser'>
                                <a title='Thông tin cá nhân' href='/thongtincanhan'>
                                    <span className='user__item-link' >
                                        <img src='https://picsum.photos/50/50' alt='' className='logo_dangNhap' /> Hello, {userLogin.taiKhoan}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}






