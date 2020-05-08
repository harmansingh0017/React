import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'

//having 2 empty 1 for whole list and another for single respectively
const initialState = {
    project: [] ,
    projectbyid: []
}

export const GlobalContext = createContext();
/*
So Globalprovider isa function in which we are making some pure function and getting the state from the use reducer and dispatch function which we are
going to use inside the pure function we made and then finally it return all these function with the current updated state we recieve
from userreducer and with the help of context.provider we are passing everything as a value to the childern components . We surrounded this function
around route in App.js so the {children} argument you looking at down below are those those component who can access it 
*/ 
export const GlobalProvider = ({ children }) => {
 

    /*
    useReducer is one of a handful of React hooks that shipped in React 16.7.0. 
    It accepts a reducer function in our case AppReducer with the application initial state in our case intialstate, returns the current application state,
     then dispatches a function which we can use to dispatch a type and payload , which going to recieve by appreducer and update the state 
     according to the type we are dispatching and return the state . and this state we are passing as a one of the value to the globalcontext.provider
     which can be access by the all the child component
    */ 
    const [state, dispatch] = useReducer(AppReducer , initialState);

    //fetch data from api and pass it to setemployees

  function  getproject(){
         return fetch("http://localhost/php-react/all-users.php")
           .then(res => res.json())
          .then(json => {
            setProject(json);
            return json.products;
           })
   };

   //fetch single data from api and pass it to setemployeesbyid
  function  getprojectbyid(id){
    return fetch('http://localhost/php-react/all-users.php?id=' + id)
      .then(res => res.json())
     .then(json => {
       setProjectbyid(json);
       return json.products;
      })
 };

   //take data from the getemployees function and dispatch it to AppReducer with type and payload 
  function setProject(project) {
    dispatch({
        type: 'SET_PROJECTS',
        payload: project
    });
 };

//take data from the getemployeesbyid function and dispatch it to AppReducer with type and payload 
function setProjectbyid(project) {
    dispatch({
        type: 'SETBYID_PROJECT',
        payload: project
    });
 };
    //recieve id from employeelist.js and delete data from db and then evoke getemployee function which will give us updated state employees
    function removeProject(id) {
        axios.post('http://localhost/php-react/delete-user.php',{
            id:id
        }).then(() => {
            getproject();
            })
    };
     
     function addProject(project) {
       axios.post('http://localhost/php-react/add-user.php',{
            title: project.title,
            content:project.content,
            firstname:project.firstname,
            lastname:project.lastname
         }).then(() => {
            getproject();
          })
     };

     function editProject(project) {
        axios.post('http://localhost/php-react/update-user.php',{
            title: project.title,
            content:project.content,
            firstname:project.firstname,
            lastname:project.lastname,
            id:project.id
         }).then(() => {
            getproject();
          })
    };

 
    //provide the above function and state we are getting from userreducer as a props to the all component
    return (<GlobalContext.Provider value={{
        project: state.project,
        projectbyid: state.projectbyid,
        removeProject,
        addProject,
        editProject,
        getproject,
        getprojectbyid
    }}>
        {children}
    </GlobalContext.Provider>);
}