import { Card, Table, ProgressBar, Badge } from "react-bootstrap";
import "./css/TopProducts.css";

const TopProducts = ({ products = [] }) => {
  const defaultProducts = [
    { id: "01", name: "Paracetamol", popularity: 75, sales: "45%", color: "#007bff" },
    { id: "02", name: "Dolo", popularity: 60, sales: "29%", color: "#28a745" },
    { id: "03", name: "Aspirin", popularity: 40, sales: "18%", color: "#8e44ad" },
    { id: "04", name: "Caltabs", popularity: 55, sales: "25%", color: "#f39c12" },
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  return (
    <Card className="top-products-card">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">
            Top Products <span className="text-muted fs-6">Past 30 Days</span>
          </h5>
        </div>
        <p className="text-muted small">Based on order Qty</p>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th style={{ width: "50%" }}>Popularity</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {displayProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  <ProgressBar now={product.popularity} className="popularity-bar" />
                </td>
                <td>
                  <Badge
                    pill
                    className="sales-badge"
                    style={{ backgroundColor: `${product.color}20`, color: product.color }}
                  >
                    {product.sales}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default TopProducts;
