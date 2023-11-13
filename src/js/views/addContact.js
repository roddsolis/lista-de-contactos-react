import React, { useState, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContact = () => {


  const { store, actions } = useContext(Context);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  const addNewContact = {
    
      "full_name": name,
      "email": email,
      "agenda_slug": "agenda-rodd",
      "address":address,
      "phone":phone
  
  }

  console.log(addNewContact)
  

  return (
    <>
      <div className="formWrapper">
        <form action="">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingresar nombre completo"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Dirección</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              aria-describedby="emailHelp"
              placeholder="Ingresar dirección"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Teléfono</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingresar teléfono"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingresar correo electrónico"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="acciones">
            <button
              className="btn btn-primary"
              onClick={() => createNewContact()}
            >
              Agregar
            </button>
            <Link to="/">
              <button className="btn btn-secondary">Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
