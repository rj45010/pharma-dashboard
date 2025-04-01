import { useState } from "react";
import "./css/Sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState("Overview");

  const menuItems = [
    { name: "Overview", icon: "bi bi-graph-up" },
    { name: "Order Management", icon: "bi bi-box-seam" },
    { name: "Distributor / CNF List", icon: "bi bi-people" },
    { name: "Expiry Returns / Credit Note", icon: "bi bi-receipt" },
  ];

  const productItems = [
    { name: "Product Management", icon: "bi bi-cart4" },
    { name: "Stock Management", icon: "bi bi-boxes" },
  ];

  const organizationItems = [
    { name: "Employee Management", icon: "bi bi-person-check" },
    { name: "Divisions Management", icon: "bi bi-diagram-3" },
  ];

  const financeItems = [
    { name: "Accounting", icon: "bi bi-calculator" },
    { name: "Analytics & Reports", icon: "bi bi-bar-chart" },
  ];

  const otherItems = [
    { name: "Profile Settings", icon: "bi bi-gear" },
    { name: "Help!", icon: "bi bi-question-circle" },
  ];

  const renderMenu = (items) => 
    items.map((item) => (
      <li key={item.name}>
        <button
          className={`rounded-pill sidebar-btn ${active === item.name ? "active" : ""}`}
          onClick={()=>setActive(item.name)}
        >
          <i className={`${item.icon} me-2`}></i> {item.name}
        </button>
      </li>
    ));

  return (
    <div className="sidebar d-flex flex-column">
      {/* AI Features Banner */}
      <div className="Ai rounded-pill d-flex align-items-center justify-content-center">
        <i className="bi bi-star text-white me-2"></i>
        <p className="m-0">AI Coming Soon!</p>
      </div>

      {/* Menu Section */}
      <nav>
        <h6 className="section-heading">BUSINESS</h6>
        <ul className="list-unstyled section-list">{renderMenu(menuItems)}</ul>

        <h6 className="section-heading">PRODUCTS</h6>
        <ul className="list-unstyled section-list">{renderMenu(productItems)}</ul>

        <h6 className="section-heading">ORGANIZATION MANAGEMENT</h6>
        <ul className="list-unstyled section-list">{renderMenu(organizationItems)}</ul>

        <h6 className="section-heading">FINANCE & REPORTING</h6>
        <ul className="list-unstyled section-list">{renderMenu(financeItems)}</ul>

        <h6 className="section-heading">OTHER</h6>
        <ul className="list-unstyled section-list">{renderMenu(otherItems)}</ul>
      </nav>

      {/* Progress Bar Section */}
      <div className="profile-section mt-auto">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <i className="bi bi-cloud me-2 cloud"></i>
            <h6 className="mb-0">Profile</h6>
          </div>
          <button className="update-btn btn btn-outline-primary rounded-pill">
            Update
          </button>
        </div>

        <div className="progress my-3" style={{ height: "10px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "70%", background: "linear-gradient(to right, #435fa3, #87adff)" }}
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="profile-banner text-center pb-2 mb-2">
          <p className="m-0">Complete your profile to enjoy more features!</p>
        </div>
        
        <div className="d-flex align-item-center justify-content-center">
          <i className="bi bi-cloud-download me-2 download-icon"></i>
          <p className="text-center coming-soon">Get JEE1 App! Coming Soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
