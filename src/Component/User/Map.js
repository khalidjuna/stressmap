import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { fromLonLat, toLonLat } from 'ol/proj'; 
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Pointer, Draw } from 'ol/interaction';
import Polygon from 'ol/geom/Polygon'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar';
import DownloadPopup from './Download'; 

const Map3DComponent = () => {
  const mapRef = useRef(null);
  const coordinatesRef = useRef(null);
  const drawInteractionRef = useRef(null);
  const selectInteractionRef = useRef(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [showDownloadPopup, setShowDownloadPopup] = useState(false); 

  useEffect(() => {
    const vectorSource = new VectorSource();

    const map = new Map({
      target: 'map',
      controls: [],
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: vectorSource,
        })
      ],
      view: new View({
        center: fromLonLat([110.426208, -7.614529]),
        zoom: 6,
      }),
    });

    const pointer = new Pointer({
      handleMoveEvent: (event) => {
        coordinatesRef.current.innerText = toLonLat(event.coordinate).map(coord => coord.toFixed(6)).join(', ');
      }
    });
    map.addInteraction(pointer);

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

  const handleHandMode = () => {
    if (drawInteractionRef.current) {
      mapRef.current.removeInteraction(drawInteractionRef.current);
      drawInteractionRef.current = null;
    }
    if (!selectInteractionRef.current) {
      selectInteractionRef.current = new Pointer({
        handleMoveEvent: (event) => {
          const pixel = event.map.getEventPixel(event.originalEvent);
          const hit = event.map.forEachFeatureAtPixel(pixel, (feature) => {
            return true;
          });
          event.map.getTargetElement().style.cursor = hit ? 'pointer' : '';
        },
      });
      mapRef.current.addInteraction(selectInteractionRef.current);
    }
  };

  const handleDrawRectangleMode = () => {
    if (selectInteractionRef.current) {
      mapRef.current.removeInteraction(selectInteractionRef.current);
      selectInteractionRef.current = null;
    }
    if (!drawInteractionRef.current) {
      const vectorSource = mapRef.current.getLayers().getArray()[1].getSource();
      const geometryFunction = (coordinates, geometry) => {
        if (!geometry) {
          geometry = new Polygon([]);
        }
        const start = coordinates[0];
        const end = coordinates[1];
        const coords = [
          [start[0], start[1]],
          [start[0], end[1]],
          [end[0], end[1]],
          [end[0], start[1]],
          [start[0], start[1]]
        ];
        geometry.setCoordinates([coords]);
        return geometry;
      };
      drawInteractionRef.current = new Draw({
        type: 'Circle',
        source: vectorSource,
        geometryFunction: geometryFunction,
        maxPoints: 2
      });

      drawInteractionRef.current.on('drawend', (event) => {
        const coordinates = event.feature.getGeometry().getCoordinates()[0];
        setSelectedArea(coordinates); 
        setShowDownloadPopup(true);
      });

      mapRef.current.addInteraction(drawInteractionRef.current);
    }
  };

  const handleCloseDownloadPopup = () => {
    setShowDownloadPopup(false);
  };

  const handleDownload = () => {
    console.log('Download selected area:', selectedArea);
  };

  return (
    <div>
      <Navbar />
      <div id="map" className="map-container"></div>
      <div ref={coordinatesRef} className="coordinates"></div>
      <div className="controls">
        <div className="mode-controls">
          <button className="btn btn-light" onClick={handleHandMode} style={{ color: '#007bff' }}>
            <i className="bi bi-hand-index"></i>
          </button>
          <button className="btn btn-light" onClick={handleDrawRectangleMode} style={{ color: '#007bff' }}>
            <i className="bi bi-square"></i>
          </button>
        </div>
        <div className="zoom-controls">
          <button className="btn btn-light" onClick={handleZoomIn} style={{ backgroundColor: '#007bff', color: '#fff' }}>
            <i className="bi bi-plus"></i>
          </button>
          <button className="btn btn-light" onClick={handleZoomOut} style={{ backgroundColor: '#007bff', color: '#fff' }}>
            <i className="bi bi-dash"></i>
          </button>
        </div>
      </div>
      {showDownloadPopup && (
        <DownloadPopup
          onClose={handleCloseDownloadPopup}
          selectedArea={selectedArea} 
          onDownload={handleDownload} 
        />
      )}
      <style>
        {`
          .map-container {
            width: 100%;
            height: calc(100vh);
          }

          .coordinates {
            position: absolute;
            top: 70px;
            right: 10px;
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            padding: 5px 10px;
            border-radius: 5px;
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
          .mode-controls {
            display: flex;
            flex-direction: column;
          }
          .btn {
            margin-bottom: 3px;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

export default Map3DComponent;
