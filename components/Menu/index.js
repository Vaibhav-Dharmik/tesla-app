import { faChevronRight, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import items from "./items";
const Menu = () => {
  return (
    <View style={styles.menuItems}>
      {items.map((item) => (
        <TouchableOpacity key={item.id}>
          <View style={styles.menuRow}>
            <FontAwesomeIcon style={styles.icon} icon={item.icon} size={24} />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{item.title}</Text>
              {item.subTitle && (
                <Text style={styles.subTitle}> {item.subTitle} </Text>
              )}
            </View>
            <FontAwesomeIcon
              style={styles.arrowIcon}
              icon={faChevronRight}
              size={24}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Menu;
