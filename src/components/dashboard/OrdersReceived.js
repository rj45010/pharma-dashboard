import React, { useState, useEffect } from "react";
import { getDistributorProductInfo } from "../services/Api.js";
import { Card } from "react-bootstrap";
import "./css/OrdersReceived.css"; 

const OrdersReceived = () => {
  const [orderReceivedToday, setOrderReceivedToday] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDistributorProductInfo();

        if (!response?.apiData) {
          throw new Error("Invalid API response format");
        }

        setOrderReceivedToday(response.apiData.orderReceivedToday); 
      } catch (err) {
        console.error("API Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>; 
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>; 
  }

  return (
    <div className="mb-3">
      <Card className="po-card">
        <Card.Body>
          <div className="po-content">
            <div className="po-badge">
              <i className="bi bi-circle-fill text-primary opacity-25"></i>
              <i className="bi bi-info-circle-fill text-primary position-absolute"></i>
            </div>
            <div className="po-stats">
              <h3>{orderReceivedToday}</h3> 
              <small>PO received today</small>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrdersReceived;
