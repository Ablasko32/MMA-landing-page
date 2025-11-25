"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });
export const MapWrapper = () => {
  return (
    <>
      {/* Map component is dynamically imported to avoid SSR issues */}
      <Map />
    </>
  );
};
