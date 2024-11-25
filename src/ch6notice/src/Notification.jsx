import React from "react";
// 실습: State와 생명주기 함수 사용하기

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

class Notification extends React.Component {
  // Notification 컴포넌트
  constructor(props) {
    super(props);

    this.state = {};   // state에 아무 데이터도 가지고 있지 않음
  }

  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() called.`);
  }
  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called.`);
  }
  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() called.`);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>
          {this.props.message}
        </span>
      </div>
    );
  }
}

export default Notification;