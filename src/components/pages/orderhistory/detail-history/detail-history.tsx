import React from 'react';
import './detail-history.scss';
import { Input, Button } from "reactstrap";

const Detail: React.FC = () => {
    return(
        <div>
            <div className="tieude">
                <h4 style={{paddingBottom:'10px'}}>Chi tiết đơn hàng</h4>
                <div className="form-group">
                    <label htmlFor="fmadonhang">Mã đơn hàng:</label>
                    <input type="text" className="form-control mt-2" value="A01" />
                </div>
                <div className="form-group">
                    <label htmlFor="ftime">Thời gian đặt hàng:</label>
                    <input type="text" className="form-control mt-2" value="19/11/2019 22:24 PM" />
                </div>
                <div className="form-group">
                    <label htmlFor="fmadonhang">Địa chỉ nhận hàng:</label>
                    <input type="text" className="form-control mt-2" value="123 Nguyễn Trãi, Phường 2, Quận 5" />
                </div>
                <div className="form-group">
                    <label htmlFor="fmadonhang">Tình trạng:</label>
                    <input type="text" className="form-control mt-2" value="Đã xử lý" />
                </div>
                <div className="form-group">
                    <label htmlFor="fmadonhang">Hình thức thanh toán:</label>
                    <input type="text" className="form-control mt-2" value="Tiền mặt" />
                </div>
            </div>
            <div className="container cart-container">
                <div className="row">
                    <div className="col-sm-9">
                    <div className="row shopping-cart-item">
                        <form>
                            <table className="table1">
                                <thead>
                                    <tr>
                                        <th style={{width:'50px'}}>STT</th>
                                        <th>Hình ảnh</th>
                                        <th>Sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img
                                                src="https://salt.tikicdn.com/cache/175x175/ts/product/3a/be/30/63989ba52dce745cc9d32f725b7d21f3.jpg"
                                            />
                                        </td>
                                        <td>
                                            <p >Giày nam, giày sneaker nam SP-283 - 40</p>
                                        </td>
                                        <td>1</td>
                                        <td>200,000đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                        </div>
                    </div>
                    <div className="col-sm-3">
            <form>
              <div className="row list-info-price">
                <div className="col-md-6">
                  <p className="title">Tổng tiền hàng:</p>
                </div>
                <div className="col-md-4">
                  <p className="price">8000000</p>
                </div>
                <div className="col-md-6">
                  <p className="title">Phí giao chuyển</p>
                </div>
                <div className="col-md-4">
                  <p className="price">8000000</p>
                </div>
              </div>
              <div className="row total2">
                <div className="col-md-6">
                  <p className="title">Tổng tiền:</p>
                </div>
                <div className="col-md-6">
                  <p className="price">150.000.000đ</p>
                </div>
              </div>
              
            </form>
          </div>
          </div>
                </div>
            </div>
    );
}

export default Detail;