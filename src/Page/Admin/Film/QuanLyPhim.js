import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Film from './Film'
import Pagination from './Pagination'
import { deleteFilm, layDanhSachPhimApiAction, updateFilm } from '../../../redux/actions/Admin_PhimAction'

import { useSelector, useDispatch } from 'react-redux'
import { USER_LOGIN } from '../../../Util/Config'
import ThemFilm from './ThemFilm';
import SuaPhim from './SuaPhim'
import FilmTimKiem from './FilmTimKiem'


export default function QuanLyPhim() {

    const [phimTimKiem, setPhimTimKiem] = useState({
        maPhim: '',
    })



    const dispatch = useDispatch()
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)



    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(5)
    console.log(posts)
    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            const res = await axios.get('https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim')
            setPosts(res.data)
            setLoading(false)
        }
        fetchPost()
        dispatch(layDanhSachPhimApiAction())

    }, [])

    // useEffect(() => {
    //     const config = {
    //         headers: {
    //             Authorization: 'Bearer' + localStorage.getItem(USER_LOGIN.accessToken)
    //         }
    //     }
    // }, [])


    // Get current posts
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFistPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFistPost, indexOfLastPost)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)



    const xoaPhim = (maPhim, maLoaiNguoiDung) => dispatch(deleteFilm(maPhim, maLoaiNguoiDung));

    const suaPhim = (maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia, maLoaiNguoiDunguser) => dispatch(updateFilm(maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia, maLoaiNguoiDunguser));


    let dk = useSelector(state => state.stateFilm.congTac)

    if (dk == "mo") {
        return <div className="d-flex" style={{ justifyContent: "center" }}>
            <SuaPhim />
        </div>
    }

    // const [phimTimKiem, setPhimTimKiem] = useState({
    //     maPhim: '',
    // })

    const handleChange = (e) => {
        let { value, name } = e.target;
        // Thay đổi giá trị thuộc tính đang onChange
        let newTimKiem = { ...phimTimKiem, [name]: value };
        // Set lại state của userLogin = giá trị mới
        setPhimTimKiem(newTimKiem)
        console.log(newTimKiem);
    }

    // const [ketQua, setketQua] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        let action = {
            type: 'FILM_TIM_KIEM',
            data: phimTimKiem,
        }

        dispatch(action)
    }


    return (
        <div className="container">
            {/* Thêm phim */}
            <div className="m-3">

                <div>
                    {/* Button trigger modal */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i className="fa fa-plus fs-1"></i><i className="fa fa-film m-2"></i>Thêm phim mới
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Thêm phim mới</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <ThemFilm />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-primary " data-bs-dismiss="modal">Thoát</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            {/* khung tim kiếm */}
            {/* khung tim kiếm */}
            <div className="container-1">
                <span className="icon"><i className="fa fa-search"></i></span>
                <form onSubmit={handleSubmit}>
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input name="tuKhoa" id="search" placeholder="Nhập vào tài khoản hoặc họ tên người dùng... " style={{ width: "100%" }} onChange={handleChange} />
                </form>

            </div>
            <div className="mt-">
                <table className="table table-active table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th style={{ width: '15%' }}>Mã phim</th>
                            <th style={{ width: '15%' }}>Tên phim</th>
                            <th style={{ width: '15%' }}>Hình ảnh</th>
                            <th style={{ width: '15%' }}>Mô tả</th>
                            <th style={{ width: '15%' }}>Bí danh</th>
                            <th style={{ width: '15%' }}>Ngay khởi chiếu</th>
                            <th style={{ width: '10%' }}>Các chức năng </th>
                        </tr>
                    </thead>
                    <tbody className="ketQuaTimKiem">
                        {/* <UserTimKiem user={user.tuKhoa} ketQua={ketQua} userLogin={userLogin} onUpdate={suaNguoiDung} onDelete={xoaNguoiDung} /> */}
                        <FilmTimKiem posts={currentPosts} phimTimKiem={phimTimKiem} userLogin={userLogin} onUpdate={suaPhim} onDelete={xoaPhim} />
                    </tbody>
                </table>
            </div>

            {/* bảng danh sách tất cả bộ phim */}
            <div className="mt-5">
                <table className="table table-active table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>Mã phim</th>
                            <th style={{ width: '10%' }}>Tên phim</th>
                            <th style={{ width: '10%' }}>Hình ảnh</th>
                            <th style={{ width: '30%' }}>Mô tả</th>
                            <th style={{ width: '5%' }}>Bí danh</th>
                            <th style={{ width: '10%' }}>Ngày khởi chiếu</th>
                            <th style={{ width: '30%' }}>Các chức năng</th>
                        </tr>
                    </thead>
                    <tbody className="chinhTheTd">

                        <Film posts={currentPosts} loading={loading} userLogin={userLogin} onUpdate={suaPhim} onDelete={xoaPhim} />

                    </tbody>

                </table>
                <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
            </div>

        </div>
    )
}

