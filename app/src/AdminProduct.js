import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getBase, { getImgBase } from "./api";
export default function AdminProduct() {
  let [product, setProduct] = useState([]);

  useEffect(() => {
    if (product.length === 0) {
      let apiAddress = getBase() + "product.php";
      fetch(apiAddress)
        .then((Response) => Response.json())
        .then((data) => {
          console.log(data);
          let error = data[0]['error'];
          console.log(error);
          if (error !== 'no') {
            alert(error);
          }
          else {
            let total = data[0]['total'];
            console.log(total);
            if (total === 0) {
              alert("no product found");
            }
            else {
              data.splice(0, 2);
              setProduct(data);
            }
          }
        });
    }
  })
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* Menu */}
        <AdminMenu />
        {/* / Menu */}
        {/* Layout container */}
        <div className="layout-page">
          {/* Navbar */}
          <AdminHeader title='Product management' />
          {/* / Navbar */}
          {/* Content wrapper */}
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="card shadow">
                <div className="card-header bg-primary p-3 d-flex justify-content-between">
                  <h4 className="text-white mb-0">Product</h4>
                  <Link to="/admin-add-product" className="btn btn-light">Add new product</Link>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th width="10%">id</th>
                          <th width="30%">Title <br />
                            Category
                          </th>
                          <th width="25%">Photo</th>
                          <th width="10%">price</th>
                          <th width="5%">Is Live</th>
                          <th width="20%">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.map((item) => {
                          return (<tr>
                            <td>{item['id']}</td>
                            <td>{item['title']}</td>
                            <td>
                              <a className="example-image-link" href={getImgBase() + "product/" + item['photo']} data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                                <img src={getImgBase() + "product/" + item['photo']} className="img-fluid example-image" />
                              </a>
                            </td>
                            <td>{item['price']}</td>
                            <td>{(item['islive']) ? "yes" : "no"}</td>
                            <td>
                              <Link title="edit" to="/admin-edit-product">
                                <i className="bx bx-edit bx-md" />
                              </Link>
                              <a href title="delete">
                                <i className="bx bx-trash bx-md" />
                              </a>
                              <Link to="/admin-product-detail" title>
                                <i className="bx bxs-detail bx-md" />
                              </Link>
                            </td>
                          </tr>)
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-backdrop fade" />
          </div>
          {/* Content wrapper */}
        </div>
        {/* / Layout page */}
      </div>
      <div className="layout-overlay layout-menu-toggle" />
    </div>
  )
}