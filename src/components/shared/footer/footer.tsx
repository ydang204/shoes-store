import React from 'react';
import './footer.scss';
import {
  Media

} from 'reactstrap';
import logof from '../../image/logof.png';

var imgStyle = {
  maxWidth: "220px",
  margin: "-20px",
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Media style={imgStyle} object src={logof} alt="Shoes Store"/>
            
            <ul className="social-icon">
              <a href="#" className="social">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </ul>
          </div>
          <div className="col-sm-3">
            <h4 className="title">Danh mục</h4>
            <span className="account-icon">
              <a href="#">
                Trang phục
              </a>
              <a href="#">
                Túi xách
              </a>
              <a href="#">
                Giày dép
              </a>
              <a href="#">
                 Phụ kiện
              </a>
            </span>
          </div>
          <div className="col-sm-3">
            <h4 className="title">Về chúng tôi</h4>
            <span className="account-icon">
              <a href="#">
                Thông tin công ty
              </a>
              <a href="#">
                Thông tin liên hệ
              </a>
              <a href="#">
                Đăng ký
              </a>
            </span>
          </div>
          <div className="col-sm-3">
            <h4 className="title">Hỗ trợ</h4>
            <span className="account-icon">
              <a href="#">
                Điều khoản hoạt động
              </a>
              <a href="#">
                Chính sách
              </a>
              <a href="#">
                Những câu hỏi thường gặp
              </a>
              <a href="#">
                Hướng dẫn mua hàng
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
