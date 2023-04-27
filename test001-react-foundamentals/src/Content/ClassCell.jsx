import { Component, PureComponent } from "react";

// commented code relates to this type of issue: https://stackoverflow.com/a/50863352/7821979 

class Cell extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      counter: props.counter ?? 0
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`UPDATE: ClassCell ${this.props.title}`);

    if (
      prevProps.title !== this.props.title
      || prevState.counter !== this.state.counter
      || prevProps.onChange !== this.props.onChange
    ) {
      this.props.onChange(this.props.title, this.state.counter);
    }
  }

  handleClick = () => {
    this.setState((oldState) => {
      return { ...oldState, counter: oldState.counter + 1 };
    });
  };

  // handleClick() {
  //   this.setState((oldState) => {
  //     return { ...oldState, counter: oldState.counter + 1 }
  //   });
  // }

  render() {
    const { color, style, totalCount, title } = this.props;

    return (
      <div
        style={{ backgroundColor: color, ...style }}
        onClick={this.handleClick}
      >
        <h2>{title}</h2>
        <span>Ćelija je kliknuta {this.state.counter} / {totalCount} puta.</span>
      </div>
    );
  }
}

export default Cell;