import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ContactList = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <ul className="list-group">
        {store.demo.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              <img src="" alt="" />
              <div className="infoWrapper" style={{ width: "100%" }}>
                <h6>{store.demo[index].nombre}</h6>
                <p>{store.demo[index].direccion}</p>
                <p>{store.demo[index].telefono}</p>
                <p>{store.demo[index].correo}</p>
              </div>
              <div className="acciones">
                <button className="btn btn-danger">Eliminar</button>
              </div>
            </li>
          );
        })}
      </ul>
      <br />
      <Link to="/add-contact">
        <button className="btn btn-primary">Agregar nuevo contacto</button>
      </Link>
    </div>
  );
};
