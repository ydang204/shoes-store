import React from 'react';
import './history.scss';
import {Link} from 'react-router-dom';
import Pagination  from '../../shared/pagination/pagination';
import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import withBreadcrumb from "../../shared/breadcrumb/with-breadcrumb";

const History: React.FC = () => { 
    return (
            <div className="history">
                <h4 style={{padding:'1em',marginLeft:'30px'}}>Đơn hàng đã mua</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã đơn hàng</th>
                            <th>Thời gian</th>
                            <th>Tổng tiền</th>
                            <th>Hình thức thanh toán</th>
                            <th>Trạng thái</th>
                            <th>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="active">
                            <td>1</td>
                            <td>A01</td>
                            <td>19/11/2019 22:24:PM</td>
                            <td>330K</td>
                            <td>Tiền mặt</td>
                            <td>Đã xử lý</td>
                            <td>
                                <i>
                                    <Link to="/history/chitiet">Chi tiết</Link>
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>A02</td>
                            <td>19/11/2019 22:24:PM</td>
                            <td>100K</td>
                            <td>Tiền mặt</td>
                            <td>Đã xử lý</td>
                            <td>
                                <i>
                                    <Link to="/history/chitiet">Chi tiết</Link>
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>A03</td>
                            <td>19/11/2019 22:24:PM</td>
                            <td>100K</td>
                            <td>Tiền mặt</td>
                            <td>Đã xử lý</td>
                            <td>
                                <i>
                                    <Link to="/history/chitiet">Chi tiết</Link>
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>A04</td>
                            <td>19/11/2019 22:24:PM</td>
                            <td>100K</td>
                            <td>Tiền mặt</td>
                            <td>Đã xử lý</td>
                            <td>
                                <i>
                                    <Link to="/history/chitiet">Chi tiết</Link>
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>A05</td>
                            <td>19/11/2019 22:24:PM</td>
                            <td>100K</td>
                            <td>Tiền mặt</td>
                            <td>Đã xử lý</td>
                            <td>
                                <i>
                                    <Link to="/history/chitiet">Chi tiết</Link>
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>A06</td>
                            <td>19/11/2019 22:24:PM</td>
                            <td>100K</td>
                            <td>Tiền mặt</td>
                            <td>Đã xử lý</td>
                            <td>
                                <i>
                                    <Link to="/history/chitiet">Chi tiết</Link>
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>A07</td>
                            <td>19/11/2019 22:24:PM</td>
                            <td>100K</td>
                            <td>Tiền mặt</td>
                            <td>Đã xử lý</td>
                            <td>
                                <i>
                                    <Link to="/history/chitiet">Chi tiết</Link>
                                </i>
                            </td>
                        </tr>
                    </tbody>
                </table>
         
                <Pagination />
            </div>
    );
}
const breadcrumbItems: BreadcrumbItem[] = [{ name: "Lịch sử đơn hàng" }];

export default withBreadcrumb(breadcrumbItems)(History);