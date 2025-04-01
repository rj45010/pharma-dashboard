import { useEffect, useState } from 'react';
import { getDistributorProductInfo } from '../../services/Api.js';
import StatCard from './StatCard';

const DistributorStats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDistributorProductInfo();
        
        if (!response?.apiData) {
          throw new Error('Invalid API response format');
        }

        const { 
          totalProducts, 
          retailersApproved,
          orderReceived
        } = response.apiData;

        setStats([
          {
            title: "Orders Received",
            subtitle: "Last 30 Days",
            value: orderReceived,
            bgColor: "#fbe9ce"
          },
          {
            title: "Total Products",
            subtitle: "In Portfolio",
            value: totalProducts,
            bgColor: "#cfddfc"
          },
          {
            title: "Distributor Approved",
            subtitle: "by You",
            value: retailersApproved,
            bgColor: "#e5e3e9"
          }
        ]);

      } catch (err) {
        console.error("API Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-4">Loading statistics...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <div className="row g-3 mb-3">
      {stats.map((stat, index) => (
        <div key={index} className="col-md-4"> 
          <StatCard {...stat} />
        </div>
      ))}
    </div>
  );
};

export default DistributorStats;