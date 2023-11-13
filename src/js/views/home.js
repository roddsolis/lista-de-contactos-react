import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.contactList);
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center">Mi agenda</h1>
        {store.contactList.map((contact) => {
          return (
            <div key={contact.id} className=" mt-5">
              <ul className="list-group container">
                <li
                  className="list-group-item "
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <div>
                        <img
                          src="https://picsum.photos/200/300"
                          alt="..."
                          className="rounded-2 contact-image"
                          height="100"
                          width="100"
                        />
                      </div>
                      <div className="mx-5">
                        <h6>{contact.full_name}</h6>
                        <span>
                          <p>
                            {" "}
                            <i className="me-2 fa-solid fa-location-dot"></i>
                            {contact.address}
                          </p>
                        </span>
                        <span>
                          <p>
                            <i className="me-2 fa-solid fa-phone-flip"></i>
                            {contact.phone}
                          </p>
                        </span>
                        <span>
                          <p>
                            <i className="me-2 fa-solid fa-envelope"></i>
                            {contact.email}
                          </p>
                        </span>
                      </div>
                    </div>
                    <div>
                      <Link to={`/contact/${contact.id}`}>
                        <button className="btn btn-primary mx-3 ">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                      </Link>

                      <button
                        className="btn btn-danger "
                        onClick={() => {
                          actions.removeContacts(contact.id);
                        }}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}{" "}
      </div>
    </>
  );
};
