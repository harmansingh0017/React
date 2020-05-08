//this is the reducer similar to the one we use in the redux , it takes 2 arguments which are state and action 
export default (state, action) => {
    switch (action.type) {
    
            //when  setemployee function called by a GlobalState.js this case is evoke and its return setting employees state in GlobalState.js
            // with payload 'action.payload'
            
             case 'SET_PROJECTS':
                return {
                    ...state,
                    project: action.payload
                };
                 //when  setemployeebyid function called by a GlobalState.js this case is evoke and its return setting employeesbyid state in GlobalState.js
            // with payload 'action.payload'
            case 'SETBYID_PROJECT':
                return {
                    ...state,
                    projectbyid: action.payload
                };
        default: return state;
    }
}


/*
    case 'REMOVE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload)
            };
        case 'ADD_EMPLOYEES':
            return {
                ...state,
                employees: [...state.employees, action.payload]
            };

                 case 'EDIT_EMPLOYEE':
            const updatedEmployee = action.payload;
            const updatedEmployees = state.employees.map(employee => {
                if (employee.id === updatedEmployee.id) {
                    return updatedEmployee;
                }
                return employee;
            });

 */