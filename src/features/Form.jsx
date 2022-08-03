// import React, { useState } from "react";
// import styled from "styled-components";
// import { useDispatch } from "react-redux";
// import nextId from "react-id-generator";
// import { addTodo } from "../redux/modules/todos";

// const Form = () => {
//   const id = nextId();

//   const dispatch = useDispatch();
//   const [todo, setTodo] = useState({
//     id: 0,
//     title: "",
//     body: "",
//     isDone: false,
//   });

//   // const todos = useSelector((state) => state.todos.todos);
//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setTodo({ ...todo, [name]: value });
//   };

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     if (todo.title.trim() === "" || todo.body.trim() === "") return;

//     dispatch(addTodo({ ...todo, id }));
//     setTodo({
//       id: 0,
//       title: "",
//       body: "",
//       isDone: false,
//     });
//   };

//   return (
//     <StAddForm onSubmit={onSubmitHandler}>
//       <StInputGroup>
//         <StFormLabel>제목</StFormLabel>
//         <StAddInput
//           type="text"
//           name="title"
//           value={todo.title}
//           onChange={onChangeHandler}
//         />
//         <StFormLabel>내용</StFormLabel>
//         <StAddInput
//           type="text"
//           name="body"
//           value={todo.body}
//           onChange={onChangeHandler}
//         />
//       </StInputGroup>
//       <StAddButton>추가하기</StAddButton>
//     </StAddForm>
//   );
// };

// export default Form;

// const StInputGroup = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
// `;

// const StFormLabel = styled.label`
//   font-size: 16px;
//   font-weight: 700;
// `;

// const StAddForm = styled.form`
//   background-color: #eee;
//   border-radius: 12px;
//   margin: 0 auto;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 30px;
//   gap: 20px;
// `;

// const StAddInput = styled.input`
//   height: 40px;
//   width: 240px;
//   border: none;
//   border-radius: 12px;
//   padding: 0 12px;
// `;

// const StAddButton = styled.button`
//   border: none;
//   height: 40px;
//   cursor: pointer;
//   border-radius: 10px;
//   background-color: teal;
//   width: 140px;
//   color: #fff;
//   font-weight: 700;
// `;
import nextId from "react-id-generator";
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addInfo } from "../redux/modules/todos";

const Form = () => {

const id = nextId();
const dispatch = useDispatch();
const [info, setInfo] = useState(
    {
        id:0,
        title:"",
        body:"",
        isDone:false,
    }
);


   

const onChange = (event) => {
    const {name, value} = event.target;
    setInfo({...info, [name]:value})
    console.log(info)
};

const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addInfo({ ...info , id }));
    setInfo({
       
       title: "",
       body: "",
       
    });}


    return (
        <div> 
        <h2>📝 &nbsp;&nbsp;전화번호 남기기 </h2>
        <form onSubmit={onSubmit} style={{marginBottom:"30px"}}>
        <label >이름</label>
        <input type="text"
               name="title"
               value={info.title} 
               onChange={onChange}
               style={{margin:"0 10px",width:"8%", height:"25px"}}
        />
        <label style={{marginLeft:"30px"}}>번호</label>
        <input type="text"
               name="body"
               value={info.body} 
               onChange={onChange}
               style={{margin:"0 10px", width:"16%", height:"25px"}}
        />
        <button style={{backgroundColor:"white", color:"#252885", borderColor:"white", borderRadius:"8px"}}>제출하기</button>
        </form>


        </div>
    );
}

export default Form;