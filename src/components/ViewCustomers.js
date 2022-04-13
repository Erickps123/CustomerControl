import './resources/ViewCustomers.css';
import { React, Component, useState } from "react";
import db from '../database/firebase';

function ViewCustomers(){

    const datos = []
    const data = [];
    const ref = db.ref('customer');
    const getData = () =>{
        ref.on('value', (snapshot) => {
           datos.push(snapshot.val());
           
        }, () => {
        }); 
    } 
  
        function recorrer(){
            Object.entries(datos).forEach(([key, value]) => {
                Object.entries(value).forEach(([key, value]) => {
                    Object.entries(value).forEach(([key, value]) => {
                          data.push(value);
                          console.log(data)
                    });
                });
            }); 
        }

 
   
    return( 
      
        <div className='container'> 
            {getData()}
            {recorrer()}
            <h3>Customer List</h3>
            <div className='row margin'>
            {data.map((value, index) => (
              <div className='col-md-4'>
                   <div className="card">
                    {console.log(value.adress)}
                    <div className="card-body">
                        <h5 className="card-title">{value.name + ' ' + value.lastname}</h5>
                        <h6 className="card-title">{value.email}</h6>
                        <h6>Address:</h6>
                        <ul className="list-group">{value.adress.map((value, index) => ( 
                            <li  key={index}>{value.adress}</li> 
                        ))}</ul>
                        
                    </div>
                    </div>
              </div>
            ))}

        
        </div>
        </div>
    )
}
     

export default ViewCustomers;
