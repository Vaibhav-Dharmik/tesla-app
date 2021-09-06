import {
  faCog,
  faFan,
  faKey,
  faLock,
  faToolbox,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Menu from "../Menu";
import styles from "./styles";

const CarItem = () => {
  const [locked, setLocked] = useState(false);
  const handleLock = () => {
    {
      locked ? setLocked(false) : setLocked(true);
    }
  };

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vaibhav's Mobile</Text>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
        </TouchableOpacity>
      </View>

      {/* Mileage */}
      <View style={styles.batterySection}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>

      {/* Status */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>

      {/* <ScrollView style={styles.container}> */}
      {/* Car Image */}
      {/* <View style={styles.carImageContainer}> */}
      {/* <Text style={styles.statusText}>jkhgklsjdhg</Text> */}
      {/* <Image
          style={styles.carImage}
          source={require("../../assets/teslacar.png")}
        /> */}
      {/* </View> */}

      <ScrollView style={styles.container}>
        {/* Control Icons */}
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon style={styles.icon} icon={faFan} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon style={styles.icon} icon={faKey} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLock}>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon
                style={styles.icon}
                icon={locked ? faLock : faUnlockAlt}
                size={24}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <Menu />

        {/* Footer */}
        <View style={styles.footerBox}>
          <Text style={styles.footerText}>
            © Copyright is reserved to Vaibhav 🚀{" "}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CarItem;
