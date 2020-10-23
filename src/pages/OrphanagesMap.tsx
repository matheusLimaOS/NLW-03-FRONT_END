import React from "react";
import { Map , TileLayer } from 'react-leaflet';
import { Link } from "react-router-dom";
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from "../images/map-marker.svg";
import '../styles/pages/orphanages-map.css';

import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
    return(
        <div id="page-map">

            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Goiânia</strong>
                    <span>Goiás</span>
                </footer>
            </aside>

            <Map
                center={[-16.6799,-49.255]}
                zoom={17}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>

        </div>
    )
}

export default OrphanagesMap;