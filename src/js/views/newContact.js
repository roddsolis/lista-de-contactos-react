import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

const initialValues = {
  full_name: "",
  email: "",
  agenda_slug: "roddsolis",
  address: "",
  phone: "",
};

const NewContact = () => {
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    // Obtenemos los datos de la API
    editContact();
  }, []);
  const editContact = async () => {
    if (id) {
      await actions.getContact(id);
      console.log(store.contact);
      setContact(store.contact);
    } else {
      await actions.getContact(null);
      console.log(store.contact);
    }
  };
  console.log(id);
  const handleContact = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };
  const addNewContact = async (event) => {
    event.preventDefault();
    if (id == undefined) {
      const response = await actions.addContacts(contact);
      if (response) navigate("/");
    } else {
      const response = await actions.updateContacts(contact, id);
      setContact(initialValues);
      if (response) navigate("/");
    }
  };
  const filterById = (items, id) => {
    return items.filter((item) => item.id === id);
  };
  return (
    <div className="container w-100" >
      <form
        onSubmit={addNewContact}
        id='form'
      >
        <div className="mb-3 col-6">
          <label htmlFor="InputFullName" className="form-label">
            Nombre Completo
          </label>
          <input
            type="text"
            className="form-control"
            id="InputFullName"
            name="full_name"
            value={contact.full_name}
            onChange={(event) => handleContact(event)}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="InputEmail" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            name="email"
            value={contact.email}
            onChange={(event) => handleContact(event)}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="PhoneNumber" className="form-label">
            Telefono
          </label>
          <input
            type="text"
            className="form-control"
            id="PhoneNumber"
            name="phone"
            value={contact.phone}
            onChange={(event) => handleContact(event)}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="InputAddress" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            id="InputAddress"
            name="address"
            value={contact.address}
            onChange={(event) => handleContact(event)}
          />
        </div>
        <button type="submit" className="btn btn-primary col-6">
          Guardar contacto
        </button>
      <Link to="/">Volver a mi agenda</Link>
      </form>
    </div>
  );
};

export default NewContact;
