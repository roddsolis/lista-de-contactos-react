import React, { useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const AddContact = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const userData = {
    nombre: name,
    direccion: address,
    telefono: phone,
    correo: email,
  };

  const setNewUser = () => {};

  return (
    <>
      <div className="formWrapper">
        <form action="">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Nombre completo</label>
            <input
              type="email"
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
              type="email"
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
              type="email"
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
              onClick={() => console.log("click")}
            >
              Agregar
            </button>
            <Link to="/contact-list">
              <button className="btn btn-secondary">Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
