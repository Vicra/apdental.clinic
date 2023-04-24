import React, { useEffect } from "react";
import { Card } from "antd";

interface LocationMapProps {
    latitude: number;
    longitude: number;
}

const LocationMap: React.FC<LocationMapProps> = ({ latitude, longitude }) => {
    const googleMapsApiKey = "AIzaSyCKCcjjb2i6zo1lszLWICNbVjdoqywGlwA";
    const googleMapsSrc = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;

    useEffect(() => {
        const renderMap = () => {
            const mapOptions: google.MapOptions = {
                center: { lat: latitude, lng: longitude },
                zoom: 15,
            };
            const map = new google.maps.Map(
                document.getElementById("map")!,
                mapOptions
            );
            const marker = new google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map,
            });
            console.log(marker);
        };

        const script = document.createElement("script");
        script.src = googleMapsSrc;
        script.onload = renderMap;
        document.head.appendChild(script);

        return () => {
            // Clean up the script tag
            document.head.removeChild(script);
        };
    }, [latitude, longitude, googleMapsSrc]);

    return (
        <Card>
            <div id="map" style={{ height: "400px", width: "100%" }} />
        </Card>
    );
};

export default LocationMap;
