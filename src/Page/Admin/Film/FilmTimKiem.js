import React, { useState } from 'react'
import TaoLichChieu from './TaoLichChieu'

export const FilmTimKiem = ({ posts, phimTimKiem, userLogin, onUpdate, onDelete }) => {

    const [kq, setKq] = useState([])
    if (posts == '') {
        return <h2></h2>
    }

    const renderFilm = () => {
        const filterFilm = posts.filter(ketQua => phimTimKiem == ketQua.maPhim)



        // return { ...posts, ketQua: filterFilm }
        return <>
            <tr>
                <td scope="row">{filterFilm.maPhim}</td>
                <td>{filterFilm.tenPhim}</td>
                <td><img src={filterFilm.hinhAnh} style={{ width: 50, height: 50 }} /></td>
                <td><div className="text-overflow ">{filterFilm.moTa}</div></td>
                <td>{filterFilm.biDanh}</td>
                <td>{filterFilm.ngayKhoiChieu}</td>
                <td className="d-flex justify-content-center">
                    {/* <TaoLichChieu /> */}
                    <button className="btn mx-3 btn-outline-info" onClick={() => onUpdate(filterFilm.maPhim, filterFilm.tenPhim, filterFilm.biDanh, filterFilm.trailer, filterFilm.hinhAnh, filterFilm.moTa, filterFilm.maNhom, filterFilm.ngayKhoiChieu, filterFilm.danhGia, userLogin.maLoaiNguoiDung)}>sửa</button>
                    <button className="btn btn-outline-danger" onClick={() => onDelete(filterFilm.maPhim, userLogin.maLoaiNguoiDung)} >X</button>
                </td>
            </tr>
        </>
    }

    return (
        <>
            {renderFilm}

        </>
    )
}

export default FilmTimKiem
