import React from "react";
import "./style.css";
export default class Onchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: " ",
    };
  }

  handleChange = (e) => {
    this.setState({
      data: e.target.value,
    });
  };

  render() {
    return (
      <div className="m-2 p-2 bg-slate-500 flex-col rounded flex justify-center items-center ">
        <input type="text" onChange={this.handleChange} />
        <h3 className="p-2 m-3 text-center rounded text-gray-800 bg-teal-300 font-bold">
          Data: {this.state.data}
        </h3>
      </div>
    );
  }
}
