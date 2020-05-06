import * as React from "react";
import { Button } from "antd";
// import { SearchOutlined } from '@ant-design/icons';

export default class ButtonEx extends React.Component {
    click = () => {
        console.log("loading......")
    }
    render() {
        return (
            <div>
                <Button
                    type={"primary"}
                    size={"large"}
                    shape={"circle-outline"}
                    onClick={this.click}
                // icon={<SearchOutlined spin/>}
                >Primary</Button>
            </div>
        )
    }
}