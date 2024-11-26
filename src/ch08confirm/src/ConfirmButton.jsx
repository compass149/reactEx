// import React from "react";

// class ConfirmButton extends React.Component{
//     constructor(props){
//         super(props);

//         this.state={
//             isConfirmed : false,
//         };
//        // this.handelConfirm=this.handelConfirm.bind(this);
//        this.handelConfirm = () => {
//         this.setState((prevState) => ({
//             isConfirmed : !prevState.isConfirmed,
//         }))
//        }
//     }

//     handelConfirm(){
//         this.setState((prevState) => ({
//             isConfirmed : ! prevState.isConfirmed,
//         }));
//     }

//     render(){
//         return (
//             <button
//             onClick={this.handelConfirm}
//             disabled={this.state.isConfirmed}>
//                 {this.state.isConfirmed?"확인됨":"확인하기"}
//             </button>
//         );
//     }
// }
// export default ConfirmButton;
import React,{useState} from "react";

function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false);
    const handelConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }

    return(
        <button onClick={handelConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨":"확인하기"}
        </button>
    )
}
export default ConfirmButton;