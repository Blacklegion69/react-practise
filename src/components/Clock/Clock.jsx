import React from "react";
import "./style.css";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const time = this.state.date.toLocaleTimeString();
    return (
      <div className="digital-clock glassmorphism rounded-lg p-4 bg-indigo-600 text-white rounded-lg shadow-xl p-4 flex flex-col items-center justify-center text-white">
        <div className="digital-clock-display glassmorphism rounded-lg p-4 bg-indigo-900 text-white text-slate-900 rounded-lg shadow-inner p-6 text-6xl font-bold">
          {time}
        </div>
      </div>
    );
  }
}
