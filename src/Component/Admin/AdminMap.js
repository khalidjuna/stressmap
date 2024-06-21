import React, { useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';
import 'ol/ol.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AdminNavbar from './AdminNavbar';

const AdminMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: 'map',
      controls: [],
      layers: [
        new TileLayer({
          source: new OSM(),
        })
      ],
      view: new View({
        center: fromLonLat([110.426208, -7.614529]),
        zoom: 6,
      }),
    });

    mapRef.current = map;

    return () => {
      map.dispose();
    };
  }, []);

  const handleZoomIn = () => {
    const view = mapRef.current.getView();
    const zoom = view.getZoom();
    view.animate({
      zoom: zoom + 1,
      duration: 250
    });
  };

  const handleZoomOut = () => {
    const view = mapRef.current.getView();
    const zoom = view.getZoom();
    view.animate({
      zoom: zoom - 1,
      duration: 250
    });
  };

  return (
    <div>
      <AdminNavbar/>
      <div id="map" className="map-container"></div>
      <div className="controls">
        <div className="zoom-controls">
          <button className="btn btn-light" onClick={handleZoomIn}style={{ backgroundColor: '#007bff', color: '#fff' }}>
            <i className="bi bi-plus"></i>
          </button>
          <button className="btn btn-light" onClick={handleZoomOut}style={{ backgroundColor: '#007bff', color: '#fff' }}>
            <i className="bi bi-dash"></i>
          </button>
        </div>
      </div>

      <style jsx>{`
        .map-container {
          width: 100%;
          height: calc(100vh);
        }

        .controls {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 20px;
          z-index: 10000;
          display: flex;
          flex-direction: column;
        }

        .zoom-controls {
          display: flex;
          flex-direction: column;
          margin-bottom: 3px;
        }

        .btn {
          margin-bottom: 3px;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default AdminMap;
