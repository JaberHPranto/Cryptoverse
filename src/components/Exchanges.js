import { Avatar, Col, Collapse, Row, Typography } from "antd";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import React from "react";
import { useGetCryptoExchangesQuery } from "../services/CryptoApi";
import Loader from "./Loader";

function Exchanges() {
  const { data, isFetching } = useGetCryptoExchangesQuery();

  const { Panel } = Collapse;
  const { Text } = Typography;

  const cryptoExchanges = data?.data?.exchanges;

  if (isFetching) return <Loader />;

  return (
    <>
      <Row className="exchanges-heading">
        <Col span={9}>Exchanges</Col>
        <Col span={5}>Trade Volume</Col>
        <Col span={5}>Market</Col>
        <Col span={5}>Changes</Col>
      </Row>
      <Collapse>
        {cryptoExchanges.map((exchange) => (
          <Panel
            showArrow={false}
            header={
              <>
                <Col span={9} className="exchanges">
                  <Text>
                    <strong>{exchange.rank}</strong>
                  </Text>
                  <Avatar src={exchange.iconUrl} />
                  <Text>{exchange.name}</Text>
                </Col>
                <Col span={5} className="volume">
                  $ {millify(exchange.volume)}
                </Col>
                <Col span={5} className="market">
                  {millify(exchange.numberOfMarkets)}
                </Col>
                <Col span={5} className="share">
                  {millify(exchange.marketShare)} %
                </Col>
              </>
            }
            key={exchange.id}
          >
            <div>
              <p>{HTMLReactParser(exchange.description || "")}</p>
            </div>
          </Panel>
        ))}
      </Collapse>
    </>
  );
}

export default Exchanges;
