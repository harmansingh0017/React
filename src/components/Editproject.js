import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";

export const Editproject = (route) => {
    let history = useHistory();
    const { projectbyid, editProject , getprojectbyid } = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState();
    const currentUserId = route.match.params.id;
    

    /* 
    What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. 
    React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
    In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.
    Yes! By default, it runs both after the first render and after every update.
      */
    useEffect(() => {
        const employeeId = currentUserId;
        getprojectbyid(currentUserId);
        //const selectedUser = employees.find(emp => emp.id === parseInt(employeeId));
        //setSeletedUser(selectedUser);
        // eslint-disable-next-line
    });

    const onSubmit = e => {
        e.preventDefault();
        console.log(selectedUser);
        editProject(selectedUser);
        history.push('/');
    }
   
    //this take userkey n value as a parameter and set(setselecteduser) it then in the empty selecteduser which then pass it to editemployee
    //when onsubmit is evoke
    const handleOnChange = (userKey, value) => setSeletedUser({ 
        ...selectedUser, 
        [userKey]: value,
        id: currentUserId
     })

  

    return (
       
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                            title
                        </label>
                        <p>{projectbyid.title}</p> 
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"  onChange={(e) => handleOnChange('title', e.target.value)} type="text" placeholder="Enter title" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="content">
                            content
                        </label>
                        <p>{projectbyid.content}</p> 
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"   onChange={(e) => handleOnChange('content', e.target.value)} type="text" placeholder="Enter content" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstname">
                            firstname
                        </label>
                        <p>{projectbyid.firstname}</p> 
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"   onChange={(e) => handleOnChange('firstname', e.target.value)} type="text" placeholder="Enter firstname" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastname">
                            lastname
                        </label>
                        <p>{projectbyid.lastname}</p> 
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"   onChange={(e) => handleOnChange('lastname', e.target.value)} type="text" placeholder="Enter lastname" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                            Edit Project
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
            )
}

//