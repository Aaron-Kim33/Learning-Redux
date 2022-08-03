import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteInfo } from "../redux/modules/todos";

import { Link } from "react-router-dom";

// const List = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => 
//   state.todos.todos)

const List = () => {
    const dispatch = useDispatch();
    const info = useSelector((state) => 
    state.infos.insertedInfo)
    //state infos 안에서 insertedInfo(추가한놈)

    const oneDeleteInfo = (id) => {
        dispatch(deleteInfo(id))
    }

    return (
        <>
        <h3>📞 &nbsp;&nbsp; 전화번호부 목록</h3>
        <div style={{display:"flex", flexWrap:"wrap", flexDirection:"row"}}>
        {info.map((hey) => {
            if (!hey.isDone){
                return (
                    <div style={{width:"20%", height:"20%" , backgroundColor:"beige", padding:"10px", display:"flex", flexDirection:"column"
                            , justifyContent:"center", alignItems:"center", textAlign:"center", margin:"20px" , borderRadius:"30px"               
                }} key={hey.id}>
                    <h4 style={{margin:"0", alignSelf:"flex-start", color:"gray"}}>id:{hey.id}</h4>
                    <div style={{width:"40%", height:"", borderRadius:"10px", border:"1px solid #eee", backgroundColor:"#68bf", color:"white"}}><h2>{hey.title}</h2></div>
                    <div style={{color:"#65f" }}><h2>{hey.body}</h2></div>
                    <button style={{backgroundColor:"white", color:"tomato", borderColor:"white", borderRadius:"8px"}} onClick={() => oneDeleteInfo(hey.id)}>삭제하기</button>
                    </div>
                )
            } else{
                return null;
            }
        })}
        </div>
        </>
    );
}
export default List;

