import Sidebar from './Sidebar';
import { Container } from 'react-bootstrap';
import './css/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="flex-grow-1 min-vh-100 main-components">
        <Container fluid className="py-3 px-3">
          {children}
        </Container>
      </main>
    </div>
  );
};

export default Layout;