import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";

export default function AdminAddPincode() {
    return (<div className="layout-wrapper layout-content-navbar">
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
                                <h4 className="text-white mb-0">Add new Pincode</h4>
                                <Link to="/admin-pincode" className="btn btn-light">back</Link>
                            </div>
                            <div className="card-body">
                                <form id="addPincodeForm" className="needs-validation mt-3" noValidate="" >
                                    <div className="form-row">
                                        <div className="form-group col-md-5 mb-2">
                                            <label htmlFor="city">City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="city"
                                                name="city"
                                                required=""
                                            />
                                            <div className="invalid-feedback">Please provide a valid city.</div>
                                        </div>
                                        <div className="form-group col-md-5 mb-2">
                                            <label htmlFor="area">Area</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="area"
                                                name="area"
                                                required=""
                                            />
                                            <div className="invalid-feedback">Please provide a valid area.</div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-5 mb-2">
                                            <label htmlFor="pincode">Pincode</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="pincode"
                                                name="pincode"
                                                required=""
                                            />
                                            <div className="invalid-feedback">Please provide a valid pincode.</div>
                                        </div>
                                        <div className="form-group col-md-5 mb-2">
                                            <label htmlFor="state">State</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="state"
                                                name="state"
                                                required=""
                                            />
                                            <div className="invalid-feedback">Please provide a valid state.</div>
                                        </div>
                                    </div>
                                    <div className="form-group form-check mb-2">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="islive"
                                            name="islive"
                                        />
                                        <label className="form-check-label" htmlFor="islive">
                                            Is Live
                                        </label>
                                    </div>
                                    <td className="d-flex justify-content-end">
                                        <a className="btn btn-primary" href="">Save</a>
                                        <a className="btn btn-dark " href="">Clear All</a>
                                    </td>
                                </form>

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
    );
}