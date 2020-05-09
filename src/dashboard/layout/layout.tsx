import * as React from "react";
import { Layout } from "antd";
import "./Layout.css";

const { Header, Sider, Content, Footer } = Layout;

export default class LayoutEx extends React.Component {
    render() {
        return (
            <div>
                {/* <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout> */}

                <Layout>
                    <Header className="header">Header</Header>
                    <Layout>
                        <Sider className="sider">Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>

                {/* <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Content>Content</Content>
                        <Sider>Sider</Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout> */}

                {/* <Layout>
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout> */}
            </div>
        )
    }
}