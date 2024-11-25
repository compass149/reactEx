import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심 식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  // notifications에 변경점이 생기면 재렌더링을 한다.
      notifications: [], // 빈 배열을 상태에 넣음, 앞으로 사용할 데이터를 state에 넣어서 초기화.
    };
  }

  componentDidMount() {
    // 컴포넌트가 마운트 된 직후 실행할 내용
    const { notifications } = this.state;
    timer = setInterval(() => { // 매 1초마다 정해진 작업 수행
      //  미리 만들어둔 알림 데이터 배열 reservedNotification으로부터 데이터를 하나씩 가져와 state에 있는 nptification 배열에 업데이트.
      if (notifications.length < reservedNotifications.length) { // 배열의 길이가 reservedNotification과 같아질 때까지 반복
        const index = notifications.length; // index를 초기화
        notifications.push(reservedNotifications[index]); // 해당 인덱스의 문자열을 배열에 push.
        this.setState({
          Notifications: notifications, // state를 바꿈
        });
      } else {
        this.setState({
          notifications: [],  //unmaount 로고 보기 위해 notifications 배열을 비움
        });
        clearInterval(timer); //  배열의 길이가 같아졌다면 timer를 제거.
      }
    }, 1000);
  }
  componentWillUnmount() {
    if (timer) { // true로 취급 == Truthy
      clearInterval(timer); // unmount된 시점에서도 사라지지 않았다면 타이머가 돌아가지 않게 clear 시킨다.
    }
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;