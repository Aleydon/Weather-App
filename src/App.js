import React, { useEffect, useState, Fragment } from 'react';





function App() {
  //Verify if Location active
  const [ location, setLocation  ] = useState(false);



  //Get your GeoLocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(true);
    })
  }, []);

  
  
  if (location == false){
    return(
      <Fragment>
          <h3>Voce Precisa habilitar a localizacao</h3>
      </Fragment>
    );
  }else{
   return (
      <div>
          <h3>Huehueheue</h3>
      </div>
    );
  }

}

export default App;
