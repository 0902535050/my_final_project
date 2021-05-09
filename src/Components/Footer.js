import React from 'react';
// import style from "../Css/main.css";

export default function Footer(props) {
    return (
        // FOOTER
        <footer>
            <div className="container">
                <div className="row footer__content">
                    <div className="col-md-6 col-lg-4  footer__policy">
                        <p className="footer__title">TIX</p>
                        <div className="row">
                            <div className="col-md-0 col-lg-6 policy__left">
                            <a className="footer__link" href="#trangchu">FAQ</a>
                                <a className="footer__link" href="#trangchu">Brand Guidelines</a>
                            </div>
                            <div className="col-md-12 col-lg-6 policy__right">
                            <a className="footer__link" href="#trangchu">Thỏa thuận dịch vụ</a>
                                <a className="footer__link" href="#trangchu">Chính sách bảo mật</a>
                            </div>
                        </div>


                    </div>

                    <div className="col-md-0 col-lg-4 pl-4 footer__partners">
                        <p className="footer__title">ĐỐI TÁC</p>
                        <div className="row col-12">
                        <a target="_blank" href="#trangchu" title="CGV"><img className="footer__icon" src="/img/partners/cgv.png" alt="CGV" /></a>
                            <a target="_blank" href="#trangchu" title="BHD"><img className="footer__icon" src="/img/partners/bhd.png" alt="BHD" /></a>
                            <a target="_blank" href="#trangchu" title="GALAXY"><img className="footer__icon" src="/img/partners/galaxycine.png" alt="GALAXY" /></a>
                            <a target="_blank" href="#trangchu" title="CINESTAR"><img className="footer__icon" src="/img/partners/cinestar.png" alt="CINESTAR" /></a>
                            <a target="_blank" href="#trangchu" title="LOTTECINE"><img className="footer__icon" src="/img/partners/lottecinema.png" alt="LOTTECINE" /></a>
                        </div>
                        <div className="row col-12">
                        <a target="_blank" href="#trangchu" title="MAGEGS"><img className="footer__icon" src="/img/partners/megags.png" alt="MAGEGS" /></a>
                            <a target="_blank" href="#trangchu" title="BETA"><img className="footer__icon" src="/img/partners/beta.jpg"  alt="BETA" /></a>
                            <a target="_blank" href="#trangchu" title="DONGDA"><img className="footer__icon" src="/img/partners/dongdacinema.png" alt="DONGDA" /></a>
                            <a target="_blank" href="#trangchu" title="TOUCH"><img className="footer__icon" src="/img/partners/touch.png" alt="TOUCH" /></a>
                            <a target="_blank" href="#trangchu" title="CINEMAX"><img className="footer__icon" src="/img/partners/cnx.jpg" alt="CINEMAX" /></a>
                        </div>
                        <div className="row col-12">
                        <a target="_blank" href="#trangchu" title="STARLIGHT"><img className="footer__icon" src="/img/partners/starlight.png" alt="CINEMAX" /></a>
                            <a target="_blank" href="#trangchu" title="DCINE"><img className="footer__icon" src="/img/partners/dcine.png" alt="DCINE" /></a>
                            <a target="_blank" href="#trangchu" title="ZALOPAY"><img className="footer__icon" src="/img/partners/zalopay_icon.png" alt="ZALOPAY" /></a>
                            <a target="_blank" href="#trangchu" title="PAYOO"><img className="footer__icon" src="/img/partners/payoo.jpg" alt="PAYOO" /></a>
                            <a target="_blank" href="#trangchu" title="VCB"><img className="footer__icon" src="/img/partners/VCB.png" alt="VCB" /></a>
                        </div>
                        <div className="row col-12">
                        <a target="_blank" href="#trangchu" title="AGRIBANK"><img className="footer__icon" src="/img/partners/AGRIBANK.png" alt="AGRIBANK" /></a>
                            <a target="_blank" href="#trangchu" title="VIETTINBANK"><img className="footer__icon" src="/img/partners/VIETTINBANK.png" alt="VIETTINBANK" /></a>
                            <a target="_blank" href="#trangchu" title="IVB"><img className="footer__icon" src="/img/partners/IVB.png" alt="IVB" /></a>
                            <a target="_blank" href="#trangchu" title="123GO"><img className="footer__icon" src="/img/partners/123go.png" alt="123GO" /></a>
                            <a target="_blank" href="#trangchu" title="LABAN"><img className="footer__icon" src="/img/partners/laban.png" alt="LABAN" /></a>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 d-flex footer__apps">
                        <div className="col-md-0 col-lg-6" >
                           <p className="footer__title">MOBILE APP</p>
                            <div className="footer__systems">
                            <a target="_blank" href="#trangchu" title="APPLE"><img className="footer__iconMobile" src="/img/mobileapp/apple-logo.png" alt="APPLE" /></a>
                                <a target="_blank" href="#trangchu" title="ANDROID"><img className="footer__iconMobile" src="/img/mobileapp/android-logo.png" alt="ANDROID" /></a>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <p className="footer__title">SOCIAL</p>
                            <div className="footer__social">
                            <a target="_blank" href="#trangchu" title="FACEBOOK"><img className="footer__iconMobile" src="/img/mobileapp/facebook-logo.png" alt="FACEBOOK" /></a>
                                <a target="_blank" href="#trangchu" title="ZALO"><img className="footer__iconMobile" src="/img/mobileapp/zalo-logo.png" alt="ZALO" /></a>
                            </div>
                        </div>

                    </div>

                </div>
                <hr className="hrFooter" />
                <div className="row footer__copyright">
                    <div className="col-md-1 col-lg-1"> <img className="zinoLogo" src="/img/zion-logo.jpg" alt="zinologo" /> </div>
                   
                    <div className="col-md-10 col-lg-10 footer__info">
                        <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
                        <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
                        <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                            <br/>
                            đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                        </span>
                        <span>Số Điện Thoại (Hotline): 1900 545 436
                            <br/>
                            Email: <a href="mailto:support@tix.vn?subject=Feedback&body=Message" style={{color:"#FB4226"}}> support@tix.vn</a>
                        </span>
                    </div>

                    <div className="col-md-1 col-lg-1"><img className="registerLogo" src="/img/register.png" alt="registerLogo" /> </div>
                </div>
            </div>
        </footer>
    )
}
