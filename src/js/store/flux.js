const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          nombre: "Carmen Araya Carrasco",
          direccion: "Calle Demo 1234",
          telefono: "+56 912345678",
          correo: "c.araya@gmail.com",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      loadSomeData: () => {
        /*
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
