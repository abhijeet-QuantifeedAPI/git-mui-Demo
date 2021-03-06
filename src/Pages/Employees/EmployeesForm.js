import {  Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import {useForm, Form} from '../../Components/useForm';
import Input from '../../Components/Controls/Input';
import {RadioGroup as MuiRadioGroup} from '../../Components/Controls/RadioGroup';
import Select from '../../Components/Controls/Select';
import Checkbox from '../../Components/Controls/Checkbox';
import DatePicker from '../../Components/Controls/DatePicker';
import Button from '../../Components/Controls/Button';

import * as employeeService from '../../Services/EmployeeService';

const genderItems = [
    {id:'male', title:'Male'},
    {id:'female', title:'Female'},
    {id:'other', title:'Other'},
]



const initialFieldValues = {
    id: 0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'',
    departmentId:'',
    hireDate: new Date(),
    isPermanent: false,
}


export default function EmployeesForm() { 

    const validate = (fiedldValues = values) => {
        let temp ={...errors}    

        if('fullName' in fiedldValues)
              temp.fullName = fiedldValues.fullName ?  "" : "This full name  field is required."
        if('email' in fiedldValues)      
              temp.email = (/$^|.+@.+..+/).test(fiedldValues.email) ?  "" : "Email is not valid."
        if('mobile' in fiedldValues)
              temp.mobile = fiedldValues.mobile.length > 9 ?  "" : "Minimum 10 numbers required."
        if('departmentId' in fiedldValues)
        temp.departmentId = fiedldValues.departmentId.length != 0 ?  "" : "This field is required."

        setErrors({
            ...temp
        })
         
        if(fiedldValues == values)
         return Object.values(temp).every(x => x == "")
       }
 
    const {values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
       } = useForm(initialFieldValues, true , validate);   
    
    

       const handleSubmit = e => {
           e.preventDefault()
           if (validate())
           {
             employeeService.insertEmployee(values)
             resetForm();
           }
             
       }
    
    return (         
        <Form onSubmit={handleSubmit}>
          <Grid  container >
              <Grid item xs={6}>
              <Input name="fullName" label="Full Name" value={values.fullName} onChange={handleInputChange} error={errors.fullName}/>
              <Input name="email"    label="Email"     value={values.email}    onChange={handleInputChange} error={errors.email}/>
              <Input name="mobile"   label="Mobile"    value={values.mobile}   onChange={handleInputChange} error={errors.mobile}/>
              <Input name="city"     label="City"      value={values.city}     onChange={handleInputChange} />
              </Grid>            
              <Grid item xs={6}>
              <MuiRadioGroup 
                         name="gender"
                         label="Gender"
                         value={values.gender}
                         onChange={handleInputChange}
                         items={genderItems}                         
                         />
                  <Select 
                         name="departmentId"
                         label="Department"
                         value={values.departmentId}
                         onChange={handleInputChange}
                         options={employeeService.getDepartmentCollection()}  
                         error={errors.departmentId}                       
                         />
                  <DatePicker 
                              name ="hireDate"
                              label="Hire Date"
                              value={values.hireDate}
                              onChange={handleInputChange}
                  />
                  <Checkbox 
                            name ="isPermanent"
                            label="Permanent Employee"
                            value={values.isPermanent}
                            onChange={handleInputChange}
                  />
                  <div>
                      <Button text="Submit" type="submit"  />
                      <Button text="Reset"  color="default" onClick={resetForm}  />
                  </div>
              </Grid>
          </Grid>   
      </Form>
            
        
    )
}
