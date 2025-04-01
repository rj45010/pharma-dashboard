const BASE_URL = "http://157.15.202.188:3001"; 
const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI1LCJ1c2VyTmFtZSI6Inlhc2hiaG9qYWsxQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiRW1wbG95ZWUiLCJkYXRhIjp7ImVtcGxveWVlSWQiOjEyNSwiZW1wbG95ZWVDb2RlIjoiRU1QMTI1IiwiZmlyc3ROYW1lIjoiWWFzaCIsImxhc3ROYW1lIjoiQmhvamFrIiwiYWRkcmVzcyI6Inh5eiIsInBob25lIjoiNzI3OTg4ODQ0MyIsImVtYWlsIjpudWxsLCJlbXBsb3llZU9mIjoxMjcsImVtcGxveWVlU3RhdHVzIjoiQWN0aXZlIiwiZW50aXR5SWQiOjEyNSwiY3JlYXRlZEF0IjoiMjAyNS0wMy0xMlQwNTozNjoyOC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wMy0xMlQwNTozNjoyOC4wMDBaIn0sImlhdCI6MTc0MTc3NzQ5OCwiZXhwIjoxNzQ0MzY5NDk4fQ.E69a7jDQkzpQJlPpNkx2uhWfLvuR2lBCji-X8TZ147s"; 

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: AUTH_TOKEN,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return { error: error.message };
  }
};

export const getStocksRunningLow = async () => await fetchData("stock-runningLow-test");
export const getDistributorProductInfo = async () => await fetchData("distProductInfo");
