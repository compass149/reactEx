import React, { useState } from "react";

function EventPractice(props){
     const [form, setForm] = useState({  //이걸 통해서 username과 message를 관리함
        username:'',
        message:''
     });
     const {username, message} = form;

     const onChange = e => {
        const nextForm ={
            ...form, //기존 상태를 복사함
            [e.target.name]: e.target.value  //현재 입력 필드에 해당하는 키에 새 값을 할당
        };
        setForm(nextForm)
     };
    // const [message, setMessage] = useState('');
    // const [username, setUsername] = useState('');
    // const onChangeMessage = e => setMessage(e.target.value);
    // const onChangeUsername = e => setUsername(e.target.value);
    const onClick = () => {
        alert(username + ' : '+message);
        setForm({username:'', message:''});
    };
    return(
        <div>
            <h1>이벤트 실습</h1>
            <input
            type="text"
            name="username"
            placeholder="사용자명을 입력해 보세요."
            onChange={onChange}
            value={username} />
            <input
            type="text"
            name="message"
            placeholder="아무거나 입력해 보세요."
            // onChange={ e => {
            //     console.log(e.target.value)
            // }} />
            onChange={onChange}
            value={message} />
            <h1>사용자명 : {username}</h1>
            <h1>메시지 : {message}</h1>
            <button onClick={onClick}>확인</button>
        </div>
    )
}
export default EventPractice;