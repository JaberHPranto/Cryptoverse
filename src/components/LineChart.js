import { Col, Row, Typography } from "antd";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinName, currentPrice, coinHistory }) => {
  const { Title: Heading } = Typography;
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Heading level={2} className="chart-Heading">
          {coinName} Price Chart
        </Heading>
        <Col className="price-container">
          <Heading level={5} className="price-change">
            {coinHistory?.data?.change} %
          </Heading>
          <Heading level={5} className="current-price">
            Current {coinName} Price : $ {currentPrice}
          </Heading>
        </Col>
      </Row>
      <Line data={data} />
    </>
  );
};

export default LineChart;
