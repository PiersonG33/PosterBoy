import React, { Component } from "react";

import axios from "axios";

export default class DjangoTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dataFromDataBase : [],
    };
    this.loadData = this.loadData.bind(this);
  }

  componentWillMount() {
    this.loadData();
  }

  async loadData() {
    /*  put the link of the data into get() */
    const promise = await axios.get(); 
    const status = promise.status;
    if(status === 200 ){ 
      const data = promise.data.data;
      this.setState({dataFromDataBase:data});
    }
  }

  render() {
    return(
      <div>
        <h1>Data</h1>
        {this.state.dataFromDataBase.map((value,index)=>{return <h4 key={index}>{value}</h4>})}
      </div>
    )
  }

}