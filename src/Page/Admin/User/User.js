import React from 'react'
import SuaNguoiDung from './SuaNguoiDung'

export const User = ({ posts, loading, userLogin, onDelete, onUpdate }) => {

    if (loading) {
        return <h2>loading...</h2>
    }



    return (
        //cách viết 2
        <>

            {posts.map((post) => (

                <tr >
                    <td scope="row">{post.taiKhoan}</td>
                    <td>{post.matKhau}</td>
                    <td>{post.hoTen}</td>
                    <td>{post.email}</td>
                    <td>{post.soDt}</td>
                    <td>{post.maLoaiNguoiDung}</td>

                    <td className="d-flex justify-content-center">

                        <button className="btn btn-outline-info ml-3" onClick={() => onUpdate(post.taiKhoan, post.matKhau, post.hoTen, post.email, post.soDt, post.maLoaiNguoiDung, userLogin.maLoaiNguoiDung)} >sua</button>

                        <button className="btn btn-outline-danger ml-3" onClick={() => onDelete(post.taiKhoan, userLogin.maLoaiNguoiDung)}>X</button>
                    </td>
                </tr>

            ))
            }

        </>
    )
}

export default User

