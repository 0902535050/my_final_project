// import React from 'react'
// import DrawerForm from './DrawerForm';

// export default function TaoLichChieu() {

//     // function onPanelChange(value, mode) {
//     //     console.log(value, mode);
//     // }

//     return (
//         <div>

//             <div>
//                 {/* Button trigger modal */}
//                 <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal">
//                     Tạo lịch chiếu
//                 </button>
//                 {/* Modal */}
//                 <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header" style={{ backgroundColor: "rgb(225 226 225)" }}>
//                                 <h4 className="modal-title text-info mx-3" id="exampleModalLabel" >Tạo lịch chiếu</h4>
//                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true" className="text-white">×</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body" style={{ backgroundColor: "rgb(225 226 225)" }}>
//                                 <div className="m-3 border-bottom border-primary">
//                                     <h3>THÔNG TIN LỊCH CHIẾU CỦA PHIM (SẼ BIDING RA)</h3>
//                                 </div>

//                                 <div>
//                                     {/* chon he thong rap */}
//                                     <div className="dropdown m-3">
//                                         <button className="btn btn-info dropdown-toggle bg-info" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
//                                             Chọn hệ thống rạp
//                                     </button>
//                                         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                             <a className="dropdown-item" href="#">se biding danh sach he thong rap</a>
//                                         </div>
//                                     </div>

//                                     {/* chon cup rap */}
//                                     <div className="dropdown m-3">
//                                         <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
//                                             Chọn cụm rạp
//                                     </button>
//                                         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                             <a className="dropdown-item" href="#">se biding danh sach cup rap</a>
//                                         </div>
//                                     </div>

//                                     {/* chon rap */}
//                                     <div className="dropdown m-3">
//                                         <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
//                                             Chọn rạp
//                                     </button>
//                                         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                             <a className="dropdown-item" href="#">se biding danh sach rap</a>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* chon ngay bat dau va ket thuc chieu cua phim */}
//                                 <div className="m-3">
//                                     <h5>Chọn ngày chiếu và ngày kết thúc</h5>
//                                     <DrawerForm />
//                                 </div>

//                                 <div className="row mx-3 form-group">
//                                     <h5 className="col-4" style={{ padding: 0 }}>Thời lượng phim</h5>
//                                     <input type="text" className="form-control col-8" id="maSinhVien" />
//                                 </div>
//                                 <div className="row mx-3 form-group">
//                                     <h5 className="col-4" style={{ padding: 0 }}>Mã nhóm (mặc định)</h5>
//                                     <input type="text" className="form-control col-8" id="maSinhVien" />
//                                 </div>
//                                 <div className="row mx-3 form-group">
//                                     <h5 className="col-4" style={{ padding: 0 }}>Giá vé</h5>
//                                     <input type="text" className="form-control col-8" id="maSinhVien" />
//                                 </div>


//                             </div>
//                             <div className="modal-footer " style={{ backgroundColor: "rgb(225 226 225)" }}>
//                                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                                 <button type="button" className="btn text-white bg-info" >Save changes</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )
// }
