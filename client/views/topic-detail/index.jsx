import React, { Component } from 'react'
import { DatePicker, Switch } from 'antd'
import 'antd/lib/date-picker/style/css'

class TopicDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // onChange = (checked) => {
  //   console.log(`switch to ${checked}`);
  // }

  render() {
    return (
      <div>
        <DatePicker />
        <Switch defaultChecked />
        this is TopicDetail
      </div>
    );
  }
}

export default TopicDetail;
