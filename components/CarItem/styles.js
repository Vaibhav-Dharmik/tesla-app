import { Platform, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  // Your styles goes here
  carContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2e2d2d",
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "white",
  },
  backgroundImage: {
    marginTop: Platform.os === "ios" ? null : 75,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  batterySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  batteryImage: {
    height: 26,
    width: 70,
    marginRight: 12,
  },
  batteryText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  status: {
    alignItems: "center",
  },
  statusText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 175,
    // marginTop: 15,
  },
  controlsButton: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 18,
    marginLeft: 25,
  },
  carImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: "100%",
    backgroundColor: "grey",
    zIndex: 0,
  },
  carImage: {
    height: "100%",
    width: "100%",
  },
  container: {
    zIndex: 1,
    position: "relative",
  },
  footerBox: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;
