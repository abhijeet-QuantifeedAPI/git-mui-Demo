import React from 'react';
import './App.css';
import SideMenu from '../Components/SideMenu';
import Header from '../Components/Header';
import {makeStyles, CssBaseline} from "@material-ui/core";
import Employees from '../Pages/Employees/Employees';

const useStyles= makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
})

function Home() {

  const classes = useStyles();
  return (
    <> 
     <SideMenu /> 
   <div className={classes.appMain}>
      <Header />  
      <Employees />     
   </div>
   <CssBaseline />  
   </>
  );
}

export default Home;
 