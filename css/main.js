import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "boxSizing": "border-box"
    },
    "body": {
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "color": "#222",
        "backgroundColor": "#BBB",
        "fontFamily": "arial",
        "fontSize": "100%",
        "width": 100 * vw,
        "display": "flex",
        "position": "relative"
    },
    "wrapper": {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "zIndex": 100,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "textAlign": "center"
    },
    "info top": {
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "textAlign": "center"
    },
    "info a": {
        "color": "#66F",
        "textDecoration": "none"
    },
    "info a:hover": {
        "textDecoration": "underline"
    },
    "info bottom": {
        "position": "absolute",
        "bottom": 0,
        "right": 5,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "audioaudio2": {
        "position": "absolute",
        "top": 0.5,
        "left": 0.5
    },
    "data-overlay": {
        "position": "absolute",
        "top": 0,
        "display": "flex",
        "left": 0,
        "flex": 1,
        "width": 100 * vw,
        "height": "100%"
    },
    "data-overlaycolor": {
        "backgroundColor": "red",
        "opacity": 0.02
    },
    "data-overlaylogo": {
        "alignItems": "center",
        "justifyContent": "center",
        "display": "flex",
        "flex": 1,
        "flexDirection": "column"
    },
    "logo": {
        "textAlign": "center",
        "fontFamily": "'Europa', sans-serif",
        "textTransform": "uppercase",
        "lineHeight": 1.75,
        "flex": 1,
        "justifyContent": "center",
        "alignItems": "center",
        "display": "flex",
        "flexDirection": "column"
    },
    "logo img": {
        "opacity": 0.65
    },
    "ember": {
        "fontSize": 3.5,
        "fontWeight": "800",
        "letterSpacing": 0.5,
        "display": "block",
        "paddingBottom": 0.6,
        "color": "#FFF",
        "opacity": 0.6,
        "paddingTop": 0.6,
        "paddingRight": 0.7,
        "paddingLeft": 0.7
    },
    "creativeagency": {
        "fontSize": 1,
        "textTransform": "uppercase",
        "letterSpacing": 0.03,
        "fontWeight": "400",
        "display": "block",
        "color": "#DDD",
        "opacity": 0.6,
        "paddingTop": 0.6,
        "paddingRight": 0.7,
        "paddingBottom": 0.6,
        "paddingLeft": 0.7
    },
    "contact": {
        "color": "white",
        "paddingTop": 0.6,
        "paddingRight": 0.7,
        "paddingBottom": 0.6,
        "paddingLeft": 0.7,
        "fontSize": 0.9,
        "opacity": 0.7,
        "flexShrink": 0,
        "flexBasis": "auto"
    },
    "annotations-wrapper span": {
        "position": "absolute",
        "zIndex": 100,
        "color": "white",
        "fontSize": 0.7
    }
});