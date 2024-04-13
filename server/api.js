const axios = require("axios").default;

exports.fetchHoldings = async () => {
  const options = {
    method: "GET",
    url: `${process.env.API_URL}/holdings`,
    headers: {
      "access-token": process.env.API_KEY, 
      Accept: "application/json",
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error("Error fetching holdings:", error);
    return error.response.data;
  }
};


exports.placeOrder = async (orderDetails) => {
  const options = {
    method: "POST",
    url: `${process.env.API_URL}/orders`,
    headers: {
      "access-token": process.env.API_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      symbol: orderDetails.symbol,
      orderType: orderDetails.orderType,
      quantity: orderDetails.quantity,
      exchangeSegment: orderDetails.exchangeSegment,
      transactionType: orderDetails.transactionType,
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error("Error placing order:", error);
    return error.response.data;
  }
};
