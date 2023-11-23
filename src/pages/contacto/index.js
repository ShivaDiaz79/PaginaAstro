
import React, { useEffect } from 'react';
import Home from "../../Home";
import Logeo from "../../Logeo"
import { app } from "../../fb"
import Layout from '../../../components/Layout';
import MapBox from './components/MapBox';





function App() {
  const [usuario, setUsuario] = React.useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes la sesión iniciada con:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  }, []);

    const location = {
      lat: -17.754694836827614,
      lng: -63.19753825664521,
      zoom: 15,
    };

  return (
    <Layout>
      <div className='bg-blue-600 h-screen pt-16'>
      
      {usuario ? <Home /> : <Logeo setUsuario={setUsuario} />}
      <div className="h-full w-full rounded-lg p-8 mt-10 md:mt-0">
            <MapBox lat={location.lat} lng={location.lng} zoom={location.zoom} />
          </div>
      </div>
      </Layout>
  );
}

export default App;
