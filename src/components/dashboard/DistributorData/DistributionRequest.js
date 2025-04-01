import { useState } from "react";
import { Card, Table, Nav, Badge } from "react-bootstrap";
import distributorRequests from "./DistributionData";
import "./DistributionRequest.css";

const DistributorRequests = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredRequests =
    activeTab === "All"
      ? distributorRequests
      : distributorRequests.filter((req) => req.status === activeTab);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return <Badge bg="warning" className="rounded-pill">Pending</Badge>;
      case "Approved":
        return <Badge bg="success" className="rounded-pill">Approved</Badge>;
      case "Rejected":
        return <Badge bg="danger" className="rounded-pill">Rejected</Badge>;
      default:
        return <Badge bg="secondary" className="rounded-pill">{status}</Badge>;
    }
  };

  return (
    <Card className="border-1 mb-3" style={{ borderRadius: "33px" }}>
      <Card.Body>
        
        <div className="d-flex justify-content-between align-items-start mb-1">
          <div className="d-flex align-items-center">
            <h5 className="card-title mb-1 me-2">Distributor Requests</h5>
            <Badge className="pending">
              42 Pending
            </Badge>
          </div>
        </div>
        <p className="text-muted mb-2" style={{ fontSize: "0.6rem" }}>
          You have got orders!! Approve the dealers and start processing orders.
        </p>

        <div className="tabs-outline">
          <Nav variant="pills" className="distributor-tabs">
            {["All", "Pending", "Approved", "Rejected"].map((tab) => (
              <Nav.Item key={tab} className="distributor-tab-item">
                <Nav.Link
                  className={`distributor-tab-link ${
                    activeTab === tab ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        <Table responsive>
          <thead>
            <tr className="text-muted">
              <th>Distributor Name</th>
              <th>Status</th>
              <th>Contact No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <div
                      className="me-3 rounded distributor-logo"
                      style={{ width: "40px", height: "40px", overflow: "hidden" }}
                    >
                      <img src={request.logo || ""} alt="logo" className="img-fluid" />
                    </div>
                    <div>
                      <p className="mb-0 fw-medium">{request.name}</p>
                      <p className="mb-0 small text-muted">
                        License No. {request.licenseNo}
                      </p>
                      <p className="mb-0 small text-muted">{request.location}</p>
                    </div>
                  </div>
                </td>
                <td>{getStatusBadge(request.status)}</td>
                <td>{request.contact}</td>
                <td>
                  <button className="btn btn-link text-primary p-0">
                    <i
                      className="bi bi-arrow-right"
                      style={{ fontSize: "1.25rem" }}
                    ></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default DistributorRequests;
