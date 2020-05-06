import * as React from "react";
import { Row, Col, } from "antd";
import "./grid.css";

export default class GridEx extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className={"grid-box"} span={24}>col</Col>
                </Row>
                <Row>
                    <Col className={"grid-box"} span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col className={"grid-box"} span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col className={"grid-box"} span={8}>col-8</Col>
                </Row>
            </div>
        )
    }
}