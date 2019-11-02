import React from "react";
import './footer.scss';

const Footer: React.FC = () => {
    return(
        <footer  className="footer">
             <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h4 className="title">About us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, libero a molestie consectetur, sapien elit lacinia mi.</p>
                        <ul className="social-icon">
                            <a href="#" className="social"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#" className="social"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#" className="social"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href="#" className="social"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                            <a href="#" className="social"><i className="fa fa-google" aria-hidden="true"></i></a>
                            <a href="#" className="social"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h4 className="title">Danh mục</h4>
                        <span className="acount-icon">    
                            <a href="#"><i className="fa fa-heart" aria-hidden="true"></i> Trang phục</a>
                            <a href="#"><i className="fa fa-users" aria-hidden="true"></i>Túi xách</a>
                            <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Giày dép</a>
                            <a href="#"><i className="fa fa-globe" aria-hidden="true"></i> Phụ kiện</a> 
                        </span>
                    </div>
                    <div className="col-sm-3">
                        <h4 className="title">Về chúng tôi</h4>
                        <span className="acount-icon">    
                            <a href="#"><i className="fa fa-heart" aria-hidden="true"></i>Thông tin công ty</a>
                            <a href="#"><i className="fa fa-users" aria-hidden="true"></i>Thông tin liên hệ</a>
                            <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Đăng ký</a> 
                        </span>
                    </div>
                    <div className="col-sm-3">
                        <h4 className="title">Hỗ trợ</h4>
                        <span className="acount-icon">    
                            <a href="#"><i className="fa fa-heart" aria-hidden="true"></i>Điều khoản hoạt động</a>
                            <a href="#"><i className="fa fa-users" aria-hidden="true"></i>Chính sách</a>
                            <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Những câu hỏi thường gặp</a>
                            <a href="#"><i className="fa fa-globe" aria-hidden="true"></i>Hướng dẫn mua hàng</a> 
                        </span>
                    </div>
                </div>
             </div>
        </footer>
    );
};

export default Footer;