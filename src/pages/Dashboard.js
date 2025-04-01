import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Layout from '../components/layout/Layout';
import StatsCard from '../components/dashboard/StatCards/DistributorStats'; 
import DistributorRequests from '../components/dashboard/DistributorData/DistributionRequest';
import TopProducts from '../components/dashboard/TopProducts';
import TopDistributors from '../components/dashboard/TopDistributors';
import OrdersReceived from '../components/dashboard/OrdersReceived';
import StocksRunningLow from '../components/dashboard/StockRunningLow';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>

          {/* First Column */}
          <Col md={8}>
            <div className="hello mb-4">
              <h1 className="mb-1">Hello,</h1>
              <p className="text-muted">We have all the stats ready for you!!</p>
            </div>

            <StatsCard />

            <DistributorRequests />
            
            <div className="Top-Product">
              <TopProducts />
            </div>
          </Col>

          {/* Second Column */}
          <Col md={4} className='pt-2'>
            <OrdersReceived />
            <div className="business-link mb-3">
              <Card className="business-link-card">
                <Card.Body className="business-link-content">
                  <div className="business-link-text">
                    <i className="bi bi-link-45deg me-2" style={{ fontSize: '24px' }}></i>
                    <span>Your Business</span>
                    <span className="business-link-copy">Copy Link</span>
                  </div>
                  <div className="business-link-action">
                    <i className="bi bi-share business-link-action-icon"></i>
                    <span className="business-link-action-text">Link</span>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="Top-Distributors mb-2">
              <TopDistributors />
            </div>

            <div className="Low-Stock">
              <StocksRunningLow />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Dashboard;