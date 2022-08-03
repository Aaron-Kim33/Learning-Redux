// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";
// const GET_TODO_BY_ID = "GET_TODO_BY_ID";
// const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO"

// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload,
//   }
// }

// export const deleteTodo = (payload) => {
//   return{
//     type: DELETE_TODO,
//     payload,
//   }
// }

// export const getTodoByID = (payload) => {
//   return {
//     type: GET_TODO_BY_ID,
//     payload,
//   }
// }

// export const toggleStatusTodo = (payload) => {
//   return {
//     type: TOGGLE_STATUS_TODO,
//     payload,
    
//   }
// }

// const initialState = {
//   todos: [
//     {
//       id: "1",
//       title: "유튜브 시청",
//       body: "과도한 유튜브 시청 금지",
//       isDone: false,
//     }
//   ],
//   todo: {
//     id: "0",
//     title: "",
//     body: "",
//     isDone: false,
//   },
// }

// const todos = (state = initialState, action) => {
  
//   switch (action.type) {
    
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
        
//       };
      
//     case DELETE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };

//     case TOGGLE_STATUS_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) => {
//           if (todo.id === action.payload) {
//             return {
//               ...todo,
//               isDone: !todo.isDone,
//             };
//           } else {
//             return todo;
//           }
//         }),
//       };

//     case GET_TODO_BY_ID:
//       return {
//         ...state,
//         todo: state.todos.find((todo) => {
//           return todo.id === action.payload;
//         }),
//       };
//     default:
//       return state;
      
//   }
// };

// export default todos;

const ADD_INFO = "ADD_INFO";
const DELETE_INFO = "DELETE_INFO";

export const addInfo = (payload) => {
    return{
        type:ADD_INFO,
        payload
    }
} ;

export const deleteInfo = (payload) => {
    return{
        type:DELETE_INFO,
        payload
    }
}; 

const initialState = {
    insertedInfo : [
        {
            id:"1",
            title:"김윤철",
            body: "01040871819",
            isDone: false,
        }
    ],
    info : 
        {
            id:"0",
            title: "",
            body : "",
            isDone : false,
        }
};


const infos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INFO:
            return {
                ...state,
                insertedInfo: [...state.insertedInfo, action.payload],
            }
        case DELETE_INFO:
            return {
                ...state,
                insertedInfo: state.insertedInfo.filter((info)=>info.id !== action.payload)
                }
                default : 
                return state;
    };
};

export default infos;