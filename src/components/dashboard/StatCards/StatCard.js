import { Card, Button } from 'react-bootstrap';
import './StatCard.css';

const StatCard = ({ title, subtitle, value, bgColor, loading }) => {
  if (loading) {
    return (
      <div className="stat-card">
        <Card className="h-100" style={{ backgroundColor: bgColor }}>
          <Card.Body className="d-flex flex-column justify-content-between">
            <div className="placeholder-glow">
              <h5 className="card-title placeholder col-6">
                <span className="visually-hidden">Loading title</span>
              </h5>
              <p className="card-subtitle placeholder col-4">
                <span className="visually-hidden">Loading subtitle</span>
              </p>
              <h2 className="card-value placeholder col-8">
                <span className="visually-hidden">Loading value</span>
              </h2>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return (
    <div className="stat-card">
      <Card className="h-100" style={{ backgroundColor: bgColor }}>
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">
              {title || <span className="visually-hidden">No title provided</span>}
            </h5>
            <p className="card-subtitle">
              {subtitle || <span className="visually-hidden">No subtitle provided</span>}
            </p>
            <h2 className="card-value">
              {value || <span className="visually-hidden">No value provided</span>}
            </h2>
          </div>
          <div className="text-end">
            <Button variant="dark" className="action-button" aria-label="Action">
              <i className="bi bi-arrow-up-right action-icon"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StatCard;