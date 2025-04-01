import { Card } from "react-bootstrap";

const TopDistributors = () => {
  // Hardcoded data
  const data = [
    { id: 1, name: "Agarwal Pharma", percentage: 15, logo: "A", color: "#4285F4" },
    { id: 2, name: "Jyoty Pharma", percentage: 35, logo: "J", color: "#34A853" },
    { id: 3, name: "Jyoty Pharma", percentage: 35, logo: "J", color: "#34A853" },
    { id: 4, name: "Rama Dealers", percentage: 50, logo: "R", color: "#000000" },
    { id: 5, name: "Rama Dealers", percentage: 50, logo: "R", color: "#000000" },
    { id: 6, name: "Rama Dealers", percentage: 50, logo: "R", color: "#000000" },
    { id: 7, name: "Rama Dealers", percentage: 50, logo: "R", color: "#000000" },
    { id: 8, name: "Rama Dealers", percentage: 50, logo: "R", color: "#000000" },
    { id: 9, name: "Rama Dealers", percentage: 50, logo: "R", color: "#000000" },
    { id: 10, name: "Rama Dealers", percentage: 50, logo: "R", color: "#000000" }
  ];

  const blueSegment = data.filter((d) => d.color === "#4285F4").reduce((sum, item) => sum + item.percentage, 0);
  const greenSegment = data.filter((d) => d.color === "#34A853").reduce((sum, item) => sum + item.percentage, 0);
  const blackSegment = data.filter((d) => d.color === "#000000").reduce((sum, item) => sum + item.percentage, 0);

  return (
    <Card className="border-1 mb-4 h-100vh" style={{ borderRadius: "33px" }}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">Top 10 Distributors</h5>
          <i className="bi bi-three-dots-vertical" style={{ cursor: "pointer" }}></i>
        </div>
        <p className="text-muted small">Based on order Qty</p>

        <div className="mb-3">
          <div className="d-flex" style={{ height: "8px", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ width: `${blueSegment}%`, backgroundColor: "#4285F4" }}></div>
            <div style={{ width: `${greenSegment}%`, backgroundColor: "#34A853" }}></div>
            <div style={{ width: `${blackSegment}%`, backgroundColor: "#000000" }}></div>
          </div>
        </div>

        <div className="overflow-auto">
          {data.map((distributor) => (
            <div key={distributor.id} className="d-flex align-items-center mb-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle me-3"
                style={{
                  width: "33px",
                  height: "33px",
                  backgroundColor: distributor.color,
                  color: "white"
                }}
              >
                {distributor.logo}
              </div>
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="me-2 d-flex align-items-center">
                    <span
                      className="rounded-circle me-2"
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: distributor.color,
                        display: "inline-block"
                      }}
                    ></span>
                    {distributor.name}
                  </span>
                  <span className="text-muted">{distributor.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default TopDistributors;
