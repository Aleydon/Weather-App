import React, { useEffect, useState, Fragment } from 'react';





function App() {
  //Verify if Location is active
  const [ location, setLocation  ] = useState(false);



  //Get your GeoLocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(true);
    })
  }, []);

  
  
  if (location !== false){
    return(
        <div>
            <h3>Location Disable...</h3>
        </div>
    );
  }else{
   return (
      <Fragment>
          <h3>Please, active location!</h3>
      </Fragment>
    );
  }

}

export default App;
