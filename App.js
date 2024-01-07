import { StyleSheet, Text, View } from "react-native";
import MapView, { Geojson, PROVIDER_GOOGLE, Polygon } from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRef, useState } from "react";
import filteredGeoData from "./sydney-geo-data.json";
import polygonData from "./polygon_transformed_data.json";

export default function App() {
  const sheetRef = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const [fillColor, setFillColor] = useState("#00FF00");
  const snapPoints = ["10%", "50%"];

  const handleMapClick = () => {
    console.log("Click");
    sheetRef.current.snapToIndex(0);
    setIsOpen(true);
  };

  const handleSuburbClick = (data) => {
    console.log(data.feature.properties.nsw_loca_2);
  };

  return (
    <View styles={styles.mainContainer}>
      <GestureHandlerRootView style={styles.gestureHandlerRootView}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyleJson}
          pitchEnabled={false}
          rotateEnabled={false}
          initialRegion={{
            latitude: -33.865143,
            longitude: 151.2099,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          minZoomLevel={10}
          liteMode={true}
          // userInterfaceStyle="dark"
          // mapType="standard"
          onPress={handleMapClick}
        >
          {/* <Geojson
            tappable
            geojson={filteredGeoData}
            strokeColor="red"
            fillColor={fillColor}
            strokeWidth={2}
            onPress={(data) => handleSuburbClick(data)}
          /> */}
          {polygonData.features.map((data, index) => {
            const randomNumber = Math.floor(Math.random() * 256);
            return (
              <Polygon
                coordinates={data.coordinates}
                fillColor={`rgba(${randomNumber}, ${randomNumber}, ${randomNumber}, 0.5)`}
                strokeColor="blue"
                strokeWidth={2}
                key={index}
              />
            );
          })}
        </MapView>

        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          style={styles.bottomSheet}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
        >
          <View style={styles.bottomSheetView}>
            <Text>Hello</Text>
          </View>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
}

const mapStyleJson = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  gestureHandlerRootView: {
    height: "100%",
    backgroundColor: "blue",
  },
  bottomSheet: {
    backgroundColor: "red",
  },
  bottomSheetView: {
    backgroundColor: "red",
  },
});
