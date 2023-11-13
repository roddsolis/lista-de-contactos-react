import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ContactList = () => {
  const { store, actions } = useContext(Context);

  
  
  return (
    <div className="container">
      <ul className="list-group">
        {store.agenda.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              <img src="" alt="" />
              <div className="infoWrapper" style={{ width: "100%" }}>
                <h6>{store.agenda[index].full_name}</h6>
                <p>{store.agenda[index].address}</p>
                <p>{store.agenda[index].phone}</p>
                <p>{store.agenda[index].email}</p>
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
