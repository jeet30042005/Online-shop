import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
export default function AdminPincodeDetail() {
    return (
        <div>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    {/* Menu */}
                    <AdminMenu />
                    {/* / Menu */}
                    {/* Layout container */}
                    <div className="layout-page">
                        {/* Navbar */}
                        <AdminHeader title='Pincode management' />
                        {/* / Navbar */}
                        {/* Content wrapper */}
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="card shadow">
                                    <div className="card-header bg-primary p-3 d-flex justify-content-between">
                                        <h4 className="text-white mb-0">Pincode Details</h4>
                                        <Link to="/admin-product" className="btn btn-light">Back</Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="row mt-2">
                                            <div className="col-lg-10">
                                                <table className="table">
                                                    <tbody><tr>
                                                        <td className="fw-bold">id</td>
                                                        <td>1</td>
                                                    </tr>
                                                        <tr>
                                                            <td className="fw-bold">City</td>
                                                            <td>Bhavnagar</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-bold">Area</td>
                                                            <td>Subhasnagar</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-bold">Pincode</td>
                                                            <td>364001</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-bold">State</td>
                                                            <td>Gujarat</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-bold">is Live</td>
                                                            <td>yes</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-bold">is Detected</td>
                                                            <td>yes</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-lg-12">
                                                <tr className="d-flex justify-content-end"> <div className="col-lg-12">
                                                    <div className="d-flex justify-content-end">
                                                        <Link title="edit" to="/admin-edit-pincode">
                                                            <i className="bx bx-edit bx-md" />
                                                        </Link>
                                                        <a href title="delete">
                                                            <i className="bx bx-trash bx-md" />
                                                        </a>
                                                    </div>
                                                </div></tr>
                                            </div>
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
        </div>
    )
}