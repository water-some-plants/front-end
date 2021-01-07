import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { Connect } from 'react-redux';

const  PrivateRoute =({
    component: Component,
    ...rest
})=>{
    const token = localStorage.getItem('token');
    return(
        <Route
            {...rest}
            render={()=>{
                if(token){
                    return <Component/>;
                }
                return <Redirect to='/Home'/>;
            }}/>
    );
};

export default PrivateRoute;
