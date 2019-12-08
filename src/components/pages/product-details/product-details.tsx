import React, { Component } from "react";
import ProductItem from "../../shared/product-item/product-item";
import "./product-details.scss";
import Grid from "@material-ui/core/Grid";
import MyImageGallery from "./MyImageGallery";
import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import withBreadcrumb from "../../shared/breadcrumb/with-breadcrumb";
import { RouteComponentProps } from "react-router";
import ProductDetailsResModel from "../../../_models/product-api/res-model/product-details-res-model";
import { getProductDetailsAsync } from "../../../_services/products-api/product-service";

interface Props extends RouteComponentProps {}

interface States {
  product: Partial<ProductDetailsResModel>;
  slug: string;
}

class ProductDetails extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      product: {},
      slug: ""
    };
  }

  componentDidMount() {
    this.getProductDetails();
  }

  componentDidUpdate(prevProps: Props, prevStates: States) {
    const { slug } = this.props.match.params as any;
    if (slug !== this.state.slug) {
      this.getProductDetails();
    }
  }

  getProductDetails = async () => {
    const { slug } = this.props.match.params as any;
    const res = await getProductDetailsAsync(slug);
    this.setState({ slug: slug, product: res.data });
  };

  render() {
    const { product } = this.state;
    return (
      product && (
        <div>
          <div className="container1">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={12}>
                      {/* anh lay tu  MyImageGallery */}
                      <MyImageGallery />
                    </Grid>
                    <Grid container spacing={2} item xs={12} direction="column">
                      <Grid item xs={12} sm={12}>
                        <div id="myPortal" />
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{product.name}</h3>
                  <div className="rating">
                    <span className="review-no">41 Lượt yêu thích</span>
                  </div>
                  <form>
                    <table style={{ width: "350px" }}>
                      <tbody>
                        <tr>
                          <td className="price">Mã sản phẩm:</td>
                          <td style={{ color: "#14428A", fontWeight: "bold" }}>
                            A015
                          </td>
                        </tr>
                        <tr>
                          <td className="price">Tình trạng</td>
                          <td style={{ color: "#14428A", fontWeight: "bold" }}>
                            Còn hàng
                          </td>
                        </tr>
                        <tr>
                          <td className="price">Giá:</td>
                          <td className="price">
                            <span>{product.price}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="amount">Số lượng:</td>
                          <td>
                            <input
                              type="number"
                              name="number"
                              defaultValue="1"
                              style={{ width: "50px" }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button
                              className="btn btn-outline-warning"
                              type="submit"
                              style={{ marginTop: "10px" }}
                            >
                              <i
                                className="fa fa-cart-plus"
                                style={{ marginRight: "5px", fontSize: "20px" }}
                              />
                              Thêm vào giở hàng
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-warning"
                              type="submit"
                              style={{ marginTop: "10px" }}
                            >
                              Mua ngay
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container1" style={{ marginTop: "10px" }}>
            <div className="chitiet">
              <div className="chitietsp">
                <h5>Chi tiết sản phẩm</h5>
              </div>
              <div className="detailsp">
                <table>
                  <tbody>
                    <tr>
                      <td>Danh mục</td>
                      <td>Giày trơn</td>
                    </tr>
                    <tr>
                      <td>Thương hiệu</td>
                      <td> Mina</td>
                    </tr>
                    <tr>
                      <td>Chất liệu</td>
                      <td>Coton</td>
                    </tr>
                    <tr>
                      <td>Xuất sứ</td>
                      <td>Anh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="chitiet">
              <div className="chitietsp">
                <h5>Mô tả sản phẩm</h5>
              </div>
              <div className="reviewsp">
                Thiết kế đơn giản, trẻ trung, và năng động. Công nghệ xử lý thun
                dệt nguyên khối vừa ôm dáng bàn chân vừa giữ được sự thoải mái
                tối ưu. Đế giày êm, nhẹ, độ đàn hồi cao. Giày thiết kế gọn nhẹ,
                thoải mái di chuyển, nhiều kiểu dáng màu sắc có thể lựa chọn.
              </div>
            </div>
          </div>
          <div className="container1" style={{ marginTop: "10px" }}>
            <div className="danhgia">
              <h5>Đánh giá sản phẩm</h5>
            </div>
            <div style={{ marginTop: "10px" }} className="danhgia1">
              <div>
                <strong style={{ padding: "5px" }}>
                  Viết đánh giá của bạn:{" "}
                </strong>
              </div>
              <div style={{ marginLeft: "38px" }}>
                <textarea
                  cols={120}
                  rows={1}
                  name="string"
                  wrap="OFF"
                  style={{ padding: "10px" }}
                >
                  {" "}
                </textarea>
              </div>
              <button type="submit" name="Gui" className="btn btn-warning">
                Gửi nhận xét
              </button>
            </div>
          </div>
          <div className="container1" style={{ marginTop: "10px" }}>
            <h5>Các sản phẩm khác của shop</h5>
            <div className="container" style={{ marginTop: "15px" }}>
              <div className="row">
                <div className="col-md-3 col-sm-4">{/* <ProductItem /> */}</div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

const breadcrumbItems: BreadcrumbItem[] = [{ name: "Chi tiết sản phẩm" }];

export default withBreadcrumb(breadcrumbItems)(ProductDetails);
