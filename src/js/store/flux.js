const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      agenda: [],
      newcontact:[
        {
          "full_name": "",
          "email": "",
          "agenda_slug": "agenda-rodd",
          "address":"",
          "phone":""
      }
    ]
    },
    actions: {

      getAgenda: ()=>{
        fetch('https://playground.4geeks.com/apis/fake/contact/agenda/agenda-rodd')
        .then(response => response.json())
        .then(data => {
          return setStore({agenda : data})
        })
      },

      createNewContact: (newcontact)=>{
        fetch('https://playground.4geeks.com/apis/fake/contact/', {
          method: 'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify(
            
          )
        })
      }
      
   
    }
  };
};

export default getState;


/*
   //Usa getActions para llamar a una función dentro de una función
      
   exampleFunction: () => {
    getActions().onChange()
  },

  loadSomeData: () => {
      fetch().then().then(data => setStore({ "foo": data.bar }))
    },
    
    changeColor: (index, color) => {
      //get the store
      const store = getStore();
      
      //reset the global store
      setStore({ demo: demo });
    },

  */