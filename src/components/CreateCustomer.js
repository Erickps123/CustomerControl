import { useState } from "react";
import "./resources/CreateCustomer.css";

import db from '../database/firebase';

function App() {
  const [adressList, setAdressList] = useState([{ adress: "" }]);
  const [name, setName] = useState([{ c_name: "" }]);
  const [lastname, setLastName] = useState([{ c_last: "" }]);
  const [email, setEmail] = useState([{ c_email: "" }]);

  const handleAdressChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...adressList];
    list[index][name] = value;
    setAdressList(list);

  };

  const handleAdressRemove = (index) => {
    const list = [...adressList];
    list.splice(index, 1);
    setAdressList(list);
  };

  const handleAdressAdd = () => {
    setAdressList([...adressList, { adress: "" }]);
  };

  const Push = ()=>{
    const list = [...adressList];
    const c_name = name;
    const c_lastname = lastname;
    const c_email = email;

    let data ={
      name: c_name,
      lastname: c_lastname,
      email: c_email,
      adress: list
    }
    db.ref("customer").push().set({
     data,
    }).catch(alert);
  }

  return (
    <div className="container">
      <h2>Add Customer</h2>
      <form className="App" autoComplete="off">
        <div className="form-field">
          <div>
            <label>Name</label>
            <input type="text" className="form-control" name="name" placeholder="Name" onChange={(e)=> setName(e.target.value)} />
          </div>
          <div>
            <label>Lastname</label>
            <input type="text" className="form-control" name="lastname" placeholder="Lastname" onChange={(e)=> setLastName(e.target.value)} />
          </div>
          <div>
            <label>Email</label>
            <input type="text" className="form-control" name="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)}  />
          </div>
            <label>Adress(es)</label>
            {adressList.map((Iadress, index) => (
              <div key={index} className="row">
           
                <div className="col-6 col-sm-3 ">
                
                  <input
                    className="form-control margin"
                    value={Iadress.adress}
                    placeholder="Adress"
                    name="adress"
                    onChange={(e) => handleAdressChange(e, index)}
                    required
                  />
                  {adressList.length - 1 === index  && (
                    <button
                      type="button"
                      onClick={handleAdressAdd}
                      className="btn btn-primary"
                    >
                      Add an Adress
                    </button>
                 
                    
                  )}
                </div>
                <div className="col-6 col-sm-3">
              
                  {adressList.length !== 1 && (
                    <button
                      type="button"
                      onClick={() => handleAdressRemove(index)}
                      className="btn btn-danger"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
               <button type="button" onClick={Push} className="btn btn-success margin">Save Customer</button>
          </div>
     
      </form>
    </div>
  );
}

export default App;
