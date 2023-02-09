import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Loader from '../loaders/ellipsisLoaderWhite';
import styles from '../../styles/project_page.module.scss';

export default function Index() {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey : "AIzaSyD2kpXyja6687fydpcpuT_DkkEqvnFfqWQ"
    });
    if(!isLoaded) return ( <><h1>Cargando mapa...</h1> <Loader /> </> )

  return (
    <Map />
  )
}

function Map(){
    return (
        <GoogleMap
            zoom={10}
            center={{lat: 39.57766747597557, lng: 2.6414387504611745}}
            mapContainerClassName={styles.project_map_container}
        >
            <Marker position={{lat: 39.5776674759755,  lng: 2.6414387504611745} }/>
        </GoogleMap>
    )
}
