import React from "react";

export default class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    const { max } = this.props;
    return (
      <div className="flex justify-center items-center p-2 m-10 bg-gray-400 rounded flex-col">
        <h1 className="p-2 m-2 rounded text-slate-900 bg-slate-100 m-auto ">
          count:
          {count}
        </h1>
        <div className="flex justify-center items-center m-2 bg-gray-400 p-2 m-2 font-bold">
          <button
            className="w-10 p-2 m-2 mx-10 bg-slate-900 text-slate-100 m-auto font-bold"
            onClick={this.increment}
            disabled={count === parseInt(max) ? true : false}
          >
            +
          </button>
          <button
            className="w-10 p-2 m-2 mx-10 bg-slate-900 text-slate-100 m-auto font-bold"
            onClick={this.decrement}
            disabled={count === 0 ? true : false}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

/*
<Test max="10" />
*/
