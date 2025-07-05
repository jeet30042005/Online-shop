import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getBase from "./api";
export default function AdminUsers() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    let apiAddress = getBase() + "users.php";
    fetch(apiAddress)
      .then((Response) => Response.json())
      .then((data) => {
        let error = data[0]['error'];
        if (error !== 'no') {
          alert(error);
        }
        else {
          let total = data[0]['total'];
          if (total === 0) {
            alert("no user found")
          }
          else {
            data.splice(0, 2);
            setUsers(data);
          }
        }
      })
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
          <AdminHeader title='User management' />
          {/* / Navbar */}
          {/* Content wrapper */}
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="card shadow">
                <div className="card-header bg-primary p-3 d-flex justify-content-between">
                  <h4 className="text-white mb-0">Existing Users</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="mt-2 table table-sm table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>id</th>
                          <th>Email</th>
                          <th>Mobile</th>

                          <th>History</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((item) => {
                          return (<tr>
                            <td>{item['id']}</td>
                            <td>{item['email']}</td>
                            <td>{item['mobile']}</td>
                            <td>
                              <Link to="/admin-orders" title="view shoping history">
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