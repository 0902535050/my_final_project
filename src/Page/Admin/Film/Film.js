import React from 'react'

export const Film = ({ posts, loading, userLogin, onUpdate, onDelete }) => {

    if (loading) {
        return <h2>loading...</h2>
    }

    return (

        //cách viết 2
        // maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia, maLoaiNguoiDunguser
        <>
            {posts.map(post => (
                <tr>
                    <td scope="row">{post.maPhim}</td>
                    <td>{post.tenPhim}</td>
                    <td><img src={post.hinhAnh} style={{ width: 50, height: 50 }} /></td>
                    {/* <td>{post.hinhAnh}</td> */}
                    <td><div className="text-overflow ">{post.moTa}</div></td>
                    <td>{post.biDanh}</td>
                    <td>{post.ngayKhoiChieu}</td>
                    <td className="d-flex justify-content-center">
                        {/* <TaoLichChieu /> */}
                        <button className="btn mx-3 btn-outline-info" onClick={() => onUpdate(post.maPhim, post.tenPhim, post.biDanh, post.trailer, post.hinhAnh, post.moTa, post.maNhom, post.ngayKhoiChieu, post.danhGia, userLogin.maLoaiNguoiDung)}>sửa</button>
                        <button className="btn btn-outline-danger" onClick={() => onDelete(post.maPhim, userLogin.maLoaiNguoiDung)} >X</button>
                    </td>
                </tr>

            ))
            }

        </>
    )
}

export default Film

