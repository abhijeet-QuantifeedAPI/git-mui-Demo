const KEYS ={
    employees:'employees',
    employeeID:'employeeID'

}

export const getDepartmentCollection =() => ([

    {id:'1', title:'Development'},
    {id:'2', title:'Marketing'},
    {id:'3', title:'Accounting'},
    {id:'4', title:'HR'}

])

export function insertEmployee(data){
    let employees= getAllEmployees();
    data['id']= generateEmployeeID();
    employees.push(data)

    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

export function generateEmployeeID(){
    if(localStorage.getItem(KEYS.employeeID) == null)
        localStorage.setItem(KEYS.employeeID, '0')
    
    var id = parseInt(localStorage.getItem(KEYS.employeeID))
    localStorage.setItem(KEYS.employeeID, (++id).toString())
    return id;

}

export function getAllEmployees(){
    if(localStorage.getItem(KEYS.employees) == null)
       localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}