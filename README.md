Overview
This project consists of two dynamic React components:

StocksRunningLow: Displays information about stocks that are running low, fetched from an API.

DistributorStats: Provides statistical data regarding distributors, including orders received, products in portfolio, and approved distributors.

Both components integrate APIs using environment variables for secure handling of URLs and tokens.

Project Structure:
src/
├── components/
│   ├── dashboard/
│   │   ├── OrderReceived.js
│   │   ├── StockRunningLow.js
│   │   ├── TopDistributors.js
│   │   ├── TopProducts.js
│   │   ├── DistributionData/
│   │   │   ├── DistributionData.js
│   │   │   ├── DistributionRequest.css
│   │   │   ├── DistributionRequest.js
│   │   ├── StatCards/
│   │   │   ├── DistributorStat.css
│   │   │   ├── DistributorStats.js
│   │   │   ├── StatCard.css
│   │   │   ├── StatCard.js
│   │   ├── css/
│   │   │   ├── OrderReceived.css
│   │   │   ├── TopProducts.css
│   ├── layout/
│   │   ├── css/
│   │   │   ├── Footer.css
│   │   │   ├── Header.css
│   │   │   ├── Layout.css
│   │   │   ├── ProfileBar.css
│   │   │   ├── Sidebar.css
│   │   ├── images/
│   │   │   ├── logo.jpg
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Layout.js
│   │   ├── ProfileBar.js
│   │   ├── Sidebar.js
│   ├── services/
│   │   ├── Api.js
├── pages/
│   ├── Dashboard.css
│   ├── Dashboard.js
├── App.css
├── App.js
├── index.js

Technologies
React: Component-based UI development.
React-Bootstrap: Pre-styled components for seamless design.
Fetch API: To retrieve JSON data from endpoints.
