import React, { memo, useState } from 'react';

function TinTuc() {
    const [isOpen, setOpen] = useState(false);

    const readMore = () => {
        setOpen(!isOpen);
    }
    const changeState = () => {
        setOpen(false);
    }

    return (
        <div id="tinTuc" className="tinTuc container mb-5">
                <ul className="nav nav-pills mb-3 tinTuc__tieuDe" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" onClick={changeState} id="pills-dienAnh-tab" data-bs-toggle="pill" href="#pills-dienAnh" role="tab" aria-controls="pills-dienAnh" aria-selected="true">Điện Ảnh 24h</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" onClick={changeState} id="pills-review-tab" data-bs-toggle="pill" href="#pills-review" role="tab" aria-controls="pills-review" aria-selected="false">Review</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" onClick={changeState} id="pills-khuyenMai-tab" data-bs-toggle="pill" href="#pills-khuyenMai" role="tab" aria-controls="pills-khuyenMai" aria-selected="false">Khuyến mãi</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active " id="pills-dienAnh" role="tabpanel" aria-labelledby="pills-dienAnh-tab">
                        <div className="tinTuc__content">
                            <div className="row pb-3">
                                <div className="tinTuc__item col-sm-6">
                                    <div className="tinTuc__hinhAnh"><img src="/img/news/dienAnh_01.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</h5>
                                    <div className="tinTuc__noiDung">Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng!</div>
                                </div>
                                <div className="tinTuc__item col-sm-6">
                                    <div className="tinTuc__hinhAnh"><img src="/img/news/dienAnh_02.png" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu</h5>
                                    <div className="tinTuc__noiDung">Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng của tác phẩm.
                                    Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng của tác phẩm. </div>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/dienAnh_03.png" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">Gái Già Lắm Chiêu V – Những cuộc đời vương giả</h5>
                                    <div className="tinTuc__noiDung">“Gái già lắm chiêu V – Những cuộc đời vương giả” xoay quanh ba chị em gái Lý Gia. Họ sống cuộc đời vương giả tại Bạch Trà Viên – một biệt thự tráng lệ, giàu sang bậc nhất xứ Huế với vườn Bạch trà nở rộ trắng muốt.</div>
                                </div>
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/dienAnh_04.png" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm Chiêu</h5>
                                    <div className="tinTuc__noiDung">Trong bộ hình, Kaity Nguyễn diện bộ trang phục hơi hướng cổ điển mang đậm phong cách hoàng gia phương Tây, cô đang cưỡi ngựa cùng một chàng trai lạ giữa Hoàng cung – Đại Nội Huế tạo nên sự đối lập thú vị giữa hiện đại và cổ kính, giữa Á đông và phương Tây. </div>
                                </div>
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/dienAnh_05.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">Ngô Thanh Vân chính thức khởi đổng cuộc thi thiết kế trang phục cho siêu anh hùng đầu tiên tại Việt nam</h5>
                                    <div className="tinTuc__noiDung">VINAMAN là dự án phim siêu anh hùng do nữ diễn viên - Nhà sản xuất Ngô Thanh Vân bắt tay thực hiện cùng đạo diễn Việt Max. Ngô Thanh Vân chia sẻ: “Tôi là người có lòng tự tôn dân tộc rất lớn. Đi đến đâu, tôi cũng muốn giới thiệu văn hóa, con người Việt Nam cho bạn bè quốc tế. Lịch sử nước ta có rất nhiều vị anh hùng. Điều đó khiến tôi thấy rằng đã đến lúc, Việt Nam cần có phim siêu anh hùng.”.</div>
                                </div>
                            </div>
                            <div className="xemThem">
                                <button className="btnXemThem" onClick={() => readMore()}>{isOpen ? 'Thu gọn' : 'Xem thêm'}</button>
                            </div>
                            <div className={isOpen ? 'tinTucPart2Show' : 'tinTucPart2Hide'}>
                                <div className="row pb-3">
                                    <div className="tinTuc__item col-sm-6">
                                        <div className="tinTuc__hinhAnh"><img src="/img/news/dienAnh_06.jpg" alt="tinTuc" /></div>
                                        <h5 className="tinTuc__tieuDe">RÒM tung trailer hé lộ cuộc sống của dân chơi số đề</h5>
                                        <div className="tinTuc__noiDung">Với đề tài và góc nhìn mới lạ, RÒM hiện đang khiến giới mộ điệu và khán giả yêu điện ảnh nóng lòng chờ đợi ngày phim ra rạp. Nhà sản xuất mới đây đã tung poster và trailer chính thức, hé lộ những khung hình gay cấn và đậm chất nhân văn</div>
                                    </div>
                                    <div className="tinTuc__item col-sm-6">
                                        <div className="tinTuc__hinhAnh"><img src="/img/news/dienAnh_07.jpg" alt="tinTuc" /></div>
                                        <h5 className="tinTuc__tieuDe">Loạt phim kinh dị không thể bỏ lỡ trong tháng 1!</h5>
                                        <div className="tinTuc__noiDung">Trong tháng 7 này, dòng phim kinh dị với các tác phẩm hấp dẫn hứa hẹn sẽ tung hoành khắp phòng vé và thỏa mãn sự đam mê tất cả khán giả yêu điện ảnh với những giây phút hồi hộp thót tim.</div>
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="tinTuc__item col-sm-4">
                                        <div className="tinTuc__hinhAnhMedium"><img src="/img/news/dienAnh_08.jpg" alt="tinTuc" /></div>
                                        <h5 className="tinTuc__tieuDe">Antebellum - Trailer cuối cùng không hé lộ bất cứ thông tin gì thêm</h5>
                                        <div className="tinTuc__noiDung">“Antebellum” - siêu phẩm kinh dị mới nhất đến từ nhà sản xuất của “Get Out” và “Us” nhá hàng trailer cuối, giữ nguyên chiến thuật “giấu giếm đến phút cuối cùng.</div>
                                    </div>
                                    <div className="tinTuc__item col-sm-4">
                                        <div className="tinTuc__hinhAnhMedium"><img src="/img/news/dienAnh_09.jpg" alt="tinTuc" /></div>
                                        <h5 className="tinTuc__tieuDe">Những nhân vật có thể quay trở lại trong The Matrix 4</h5>
                                        <div className="tinTuc__noiDung">Những nhân vật này liên quan mật thiết với nhau, nếu một nhân vật quay trở lại thì chắc chắn phải kéo nhân vật sau thì mới có thể tạo thành cấu trúc hoàn chỉnh trong kịch bản!</div>
                                    </div>
                                    <div className="tinTuc__item col-sm-4">
                                        <div className="tinTuc__hinhAnhMedium"><img src="/img/news/dienAnh_10.jpg" alt="tinTuc" /></div>
                                        <h5 className="tinTuc__tieuDe">Bán Đảo Peninsula là bom tấn xác sống không thể bỏ lỡ!</h5>
                                        <div className="tinTuc__noiDung">Đoạn clip kéo dài gần 2 phút này đã làm nức lòng cộng đồng yêu điện ảnh khi tiết lộ tóm tắt nội dung, thông tin về tuyến nhân vật đồ sộ bên cạnh vô số đại cảnh hành động mãn nhãn. Lấy bối cảnh 4 năm sau chuỗi sự kiện kinh hoàng trong Train to Busan, tác phẩm xoay quanh </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                        <div className="tinTuc__content">
                            <div className="row pb-3">
                                <div className="tinTuc__item col-sm-6">
                                    <div className="tinTuc__hinhAnh"><img src="/img/news/review_01.png" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[Review]: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết</h5>
                                    <div className="tinTuc__noiDung">Relic là bộ phim điện ảnh, kinh dị đầu tay của đạo diễn người Úc gốc Nhật Natalie Erika James. Phim có những cơn ác mộng vừa là điềm báo cho những điều sắp tới, vừa là những ký ức được chôn vùi từ sang chấn trong quá khứ… </div>
                                </div>
                                <div className="tinTuc__item col-sm-6">
                                    <div className="tinTuc__hinhAnh"><img src="/img/news/review_02.png" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[Review]: Dinh Thự Oan Khuất (Ghost Of War)</h5>
                                    <div className="tinTuc__noiDung">Trong thời điểm nóng hổi vì dịch bệnh hiện nay, có rất ít phim bom tấn dám mạo hiểm ra mắt lúc này. Vì vậy mà đường đua rộng mở cho các phim nhỏ lẻ hơn như Dinh Thự Oan Khuất (Ghosts of War), nhưng đáng tiếc, phim không đủ hấp dẫn để kéo khán giả ùn ùn trở lại rạp. </div>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/review_03.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của Khả Như và Kiều Minh Tuấn</h5>
                                    <div className="tinTuc__noiDung">Nhân vật chính của Nắng 3: Lời Hứa Của Cha là Quế Phương (Khả Như) cùng con gái Hồng Ân (Ngân Chi). Vì nghiện cờ bạc nên bà mẹ đơn thân thường xuyên cùng con gái dàn cảnh để ăn vạ tiền của những người giàu có. Trong một lần “hành sự”, họ vô tình gặp được bác sĩ Tùng Sơn (Kiều Minh Tuấn).</div>
                                </div>
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/review_04.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân</h5>
                                    <div className="tinTuc__noiDung">Onward (tựa Việt: Truy Tìm Phép Thuật) lấy bối cảnh một thế giới giả tưởng với các sinh vật huyền bí sống cùng nhau. Phép thuật vốn ngự trị nơi đây nhưng dần bị lụi tàn để nhường chỗ cho khoa học kỹ thuật. Ian (Tom Holland) là một chàng elf sống cùng mẹ Laurel (Julia Louis-Dreyfus) </div>
                                </div>
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/review_05.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ đâu xa</h5>
                                    <div className="tinTuc__noiDung">Brahms: The Boy II là phần hậu truyện của The Boy (2016) ra mắt cách đây 4 năm. Phim bắt đầu khi Liza (Katie Holmes) và con trai Jude (Christopher Convery) bị cướp tấn công tại nhà trong khi chồng Sean (Owain Yeoman) đang đi làm đêm. Vụ việc khiến cô liên tục chịu ác mộng còn Jude mất đi khả năng nói chuyện.</div>
                                </div>
                            </div>
                            <div className="xemThem">
                                <button className="btnXemThem" onClick={() => readMore()}>{isOpen ? 'Thu gọn' : 'Xem thêm'}</button>
                            </div>
                            <div className={isOpen ? 'tinTucPart2Show' : 'tinTucPart2Hide'}>
                            <div className="row pb-3">
                                <div className="tinTuc__item col-sm-6">
                                    <div className="tinTuc__hinhAnh"><img src="/img/news/review_06.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[Review] Gái Già Lắm Chiêu 3 - Cuộc chiến mẹ chồng - nàng dâu của giới siêu giàu xứ Huế</h5>
                                    <div className="tinTuc__noiDung">Tác phẩm mới nhất của bộ đôi đạo diễn Bảo Nhân và Nam Cito mang đến nhiều tiếng cười và ý nghĩa. Đừng để trailer lừa bạn như một tác phẩm nào đó nhé.</div>
                                </div>
                                <div className="tinTuc__item col-sm-6">
                                    <div className="tinTuc__hinhAnh"><img src="/img/news/review_07.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[Review] Bí Mật Của Gió - Câu chuyện “tình người duyên ma” đầy nước mắt</h5>
                                    <div className="tinTuc__noiDung">Sau 5 năm, đạo diễn Nguyễn Phan Quang Bình đã trở lại với một câu chuyện tình đẹp nhưng nhiều day dứt và tràn đầy ý nghĩa.</div>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/review_08.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[Review] ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh</h5>
                                    <div className="tinTuc__noiDung">Xuyên suốt lịch sử nước Mỹ, cuộc nội chiến đẫm máu từ năm 1861 đến 1865 được coi là cột mốc đáng nhớ trong nỗ lực bãi bỏ chế độ nô lệ, đặc biệt là ở các bang miền Nam - nơi nhiều người da đen phải sống suốt đời phục vụ đám ông chủ da trắng trong những dinh thự xa hoa hay cánh đồng bông vải bao la mà không có nổi lấy một phút tự do, bình đẳng.</div>
                                </div>
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/review_09.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[Review] American Sniper - Chính nghĩa hay phi nghĩa?</h5>
                                    <div className="tinTuc__noiDung">American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người xem qua từng thời khắc khác nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham chiến. </div>
                                </div>
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/review_10.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[Review] Ford v Ferrari - Tuyệt tác về lịch sử của môn thể thao tốc độ</h5>
                                    <div className="tinTuc__noiDung">Ford v Ferrari là câu chuyện có thật về giải đua 24 Giờ Le Mans năm 1966. Lúc này, hãng ô tô nổi tiếng Ford Motor của Mỹ có doanh số sụt giảm nghiêm trọng. Công ty quyết định đổi chiến lược kinh doanh khi dấn sân vào ngành đua xe và quyết định mua lại hãng Ferrari đang trên đà phá sản</div>
                                </div>
                            </div>
                          
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-khuyenMai" role="tabpanel" aria-labelledby="pills-khuyenMai-tab">
                        <div className="tinTuc__content">
                            <div className="row pb-3">
                                <div className="tinTuc__item col-sm-6">
                                    <div className="tinTuc__hinhAnh"><img src="/img/news/khuyenMai_01.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">BHD 59K/VÉ CẢ TUẦN !!!</h5>
                                    <div className="tinTuc__noiDung">Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.</div>
                                </div>
                                <div className="tinTuc__item col-sm-6">
                                    <div className="tinTuc__hinhAnh"><img src="/img/news/khuyenMai_02.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">TIX 1K/VÉ NGẠI CHI GIÁ VÉ</h5>
                                    <div className="tinTuc__noiDung">Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga </div>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/khuyenMai_03.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">Sinh Nhật Mega GS</h5>
                                    <div className="tinTuc__noiDung">Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta lại đến tháng 8, tháng sinh nhật của Mega GS Cinemas.</div>
                                </div>
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/khuyenMai_04.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa</h5>
                                    <div className="tinTuc__noiDung">Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi.</div>
                                </div>
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/khuyenMai_05.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng</h5>
                                    <div className="tinTuc__noiDung">Nhân dịp khai trương Galaxy Tràng Thi, Galaxy Cinema dành tặng các Stars Hà Nội loạt phần quà siêu hấp dẫn.</div>
                                </div>
                            </div>
                            <div className="xemThem">
                                <button className="btnXemThem" onClick={() => readMore()}>{isOpen ? 'Thu gọn' : 'Xem thêm'}</button>
                            </div>
                            <div className={isOpen ? 'tinTucPart2Show' : 'tinTucPart2Hide'}>
                            <div className="row pb-3">
                                <div className="tinTuc__item col-sm-6">
                                    <div className="tinTuc__hinhAnh"><img src="/img/news/khuyenMai_06.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[CNS] Nhanh tay nhận Lì xì - 100% Rinh lộc lớn</h5>
                                    <div className="tinTuc__noiDung">Tất cả khách hàng khi mua từ 2 vé phim bất kỳ trở lên trong thời gian từ Ngày 05.02.2019 đến ngày 09.02.2019 sẽ được tặng 1 bao lì xì</div>
                                </div>
                                <div className="tinTuc__item col-sm-6">
                                    <div className="tinTuc__hinhAnh"><img src="/img/news/khuyenMai_07.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[Shopee] Cùng Shopee khoe tài sắm Tết cực ‘cool’ chỉ với 48K</h5>
                                    <div className="tinTuc__noiDung">Shopee tưng bừng sale sập sàn với chương trình Shopee Tết Sale diễn ra từ hôm nay cho đến hết ngày 17/01/2019.</div>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/khuyenMai_08.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX</h5>
                                    <div className="tinTuc__noiDung">Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.</div>
                                </div>
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/khuyenMai_09.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</h5>
                                    <div className="tinTuc__noiDung">Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.</div>
                                </div>
                                <div className="tinTuc__item col-sm-4">
                                    <div className="tinTuc__hinhAnhMedium"><img src="/img/news/khuyenMai_10.jpg" alt="tinTuc" /></div>
                                    <h5 className="tinTuc__tieuDe">[Galaxy] Mua 2 tặng 1</h5>
                                    <div className="tinTuc__noiDung">Siêu phẩm Bumblebee, phim gia đình Mary Poppins Returns, bom tấn Việt Hồn Papa Da Con Gái, phim kinh dị Xác Chết Quỷ Ám.. sắp thi nhau ra rạp.</div>
                                </div>
                            </div>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}
export default memo(TinTuc);