"use client";
import React, { useRef, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function Map({ readonly, location, onChange }: any) {
  const mapRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY!,
        version: "quarterly",
      });

      let libraries: any = null;
      async function loadLibraries() {
        if (!libraries) {
          libraries = await Promise.all([
            loader.importLibrary("maps"),
            loader.importLibrary("marker"),
          ]);
        }
        return libraries;
      }
      const [{ Map, Marker }] = await loadLibraries();
      const position = {
        lat: 39.60128890889341,
        lng: -9.069839810859907,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapTypeId: "roadmap",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      const marker = new google.maps.Marker({
        position: position,
        map: map,
      });
    };
    initMap();
  }, []);

  return (
    <>
      <div ref={mapRef} className="h-[600px] w-full">
        Google Map
      </div>
      ;
    </>
  );
}

export default Map;
