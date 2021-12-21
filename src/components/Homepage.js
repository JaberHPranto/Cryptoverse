import { Col, Row, Statistic, Typography } from "antd";
import millify from "millify";
import React from "react";
import { useGetCryptosQuery } from "../services/CryptoApi";

function Homepage() {
  const { Title } = Typography;

  const { data, isFetching, isLoading } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  // console.log(data?.data);

  if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2}>Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap:"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
    </>
  );
}

export default Homepage;
