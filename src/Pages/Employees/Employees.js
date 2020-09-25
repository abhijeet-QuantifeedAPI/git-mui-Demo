import React from 'react'
import EmployeesForm from "./EmployeesForm";
import PageHeader from '../../Components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { makeStyles } from '@material-ui/core';

const useStyles= makeStyles(theme => ({
    pageContent: {       
            margin:theme.spacing(5),
            padding:theme.spacing(3)   
        }    
}))

export default function Employees() {
    const classes = useStyles();
    return (
        <>
        <PageHeader 
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineIcon fontSize="Large"></PeopleOutlineIcon>}
       />
       <paper className={classes.pageContent}>             
        <EmployeesForm /> 
       </paper>
        </>
    )
}
