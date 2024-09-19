
import { createContext, useReducer, useContext, useState } from 'react';
export const HeaderContext = createContext({
    showHeader: false,
    setShowHeader: (val)=>{}
});
// add more context

export const headerMenuCtx = createContext();
export const useHeaderMenuCtx = () => useContext(headerMenuCtx);

export const headerMenuCtxState = () => {
    const [state] = useContext(headerMenuCtx);
    return state;
};

export const HeaderMenuCtxProvider = ({children, init}) => {
    const myCtx = useState(init); // [myCtxState, setMyCtxState]
    return <headerMenuCtx.Provider value={myCtx}>{children}</headerMenuCtx.Provider>;
};

// export function ContextProvider({ children }) {
//   const [tasks, dispatch] = useReducer(
//     tasksReducer,
//     initialTasks
//   );

//   return (
//     <TasksContext.Provider value={tasks}>
//       <TasksDispatchContext.Provider value={dispatch}>
//         {children}
//       </TasksDispatchContext.Provider>
//     </TasksContext.Provider>
//   );
// }

// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case 'added': {
//       return [...tasks, {
//         id: action.id,
//         text: action.text,
//         done: false
//       }];
//     }
//     case 'changed': {
//       return tasks.map(t => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case 'deleted': {
//       return tasks.filter(t => t.id !== action.id);
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }

// const initialTasks = [
//   { id: 0, text: 'Philosopher’s Path', done: true },
//   { id: 1, text: 'Visit the temple', done: false },
//   { id: 2, text: 'Drink matcha', done: false }
// ];