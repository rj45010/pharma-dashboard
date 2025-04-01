import { useEffect, useState } from "react";
import { Card, Spinner, Badge } from "react-bootstrap";
import { getStocksRunningLow } from "../services/Api.js";

const StocksRunningLow = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      setLoading(true); 
      try {
        const result = await getStocksRunningLow();
        console.log("API Response:", result); 

        if (!result.error && result.apiData) {
          setData(result.apiData);
        } else {
          throw new Error(result.message || "Unexpected API response format.");
        }
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchStocks(); 
  }, []);

  if (loading) {
    return (
      <div className="text-center py-4">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div className="alert alert-info">No stocks running low</div>;
  }

  return (
    <Card className="border-1 h-100" style={{ borderRadius: "33px" }}>
      <Card.Body>
        <h5 className="card-title mb-4">Stocks Running Low</h5>

        <div className="overflow-auto">
          {data.map((item) => (
            <div key={item.PId} className="mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-1" style={{ fontSize: "0.8rem" }}>{item.PName}</h6>
                <Badge
                  pill
                  bg="light"
                  text="danger"
                  className="px-2 pt-1 badge-low-stock"
                >
                  Low
                </Badge>
              </div>
              <p className="text-muted mb-0" style={{ fontSize: "0.7rem", fontWeight: "lighter" }}>Remaining Quantity: {item.Stock}</p>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StocksRunningLow;
