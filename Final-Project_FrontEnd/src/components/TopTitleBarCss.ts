type StylesType = {
    [key: string]: React.CSSProperties,
  }

export const styles: StylesType = {
    showCartNum: {
        background: "red",
        borderRadius: 12,
        position: "absolute",
        width: 20,
        height: 20,
        fontSize: 15,
        display: "block",
        color: "white",
        fontWeight: "bold",
        right: "10%",
        textAlign: "center"
    },
    NotShowCartNum: {
        background: "darkgreen",
        borderRadius: 12,
        position: "absolute",
        width: 20,
        height: 20,
        fontSize: 15,
        display: "block",
        color: "white",
        fontWeight: "bold",
        right: "10%",
        textAlign: "center"
    },
    showNotiNum: {
        background: "red",
        borderRadius: 12,
        position: "absolute",
        width: 20,
        height: 20,
        fontSize: 15,
        display: "block",
        color: "white",
        fontWeight: "bold",
        right: "7%",
        textAlign: "center"
    },
    notShowNotiNum: {
        background: "darkgreen",
        borderRadius: 12,
        position: "absolute",
        width: 20,
        height: 20,
        fontSize: 15,
        display: "block",
        color: "white",
        fontWeight: "bold",
        right: "7%",
        textAlign: "center"
    },
    cartStyle: {
        paddingRight: 13, 
        marginTop:5
    },
    campExpress: {
        fontSize: 20,
        fontWeight: "bold"
    }
  }

  // .notiNum {
//     background: red;
//     border-radius: 12px;
//     position: absolute;
//     width: 20px;
//     height: 20px;
//     font-size: 15px;
//     display: block;
//     color: white;
//     font-weight: bold;
//     right: 7%;
//     text-align: center;
// }

// .cartNum {
//     background: red;
//     border-radius: 12px;
//     position: absolute;
//     width: 20px;
//     height: 20px;
//     font-size: 15px;
//     display: block;
//     color: white;
//     font-weight: bold;
//     right: 18%;
//     text-align: center;
// }

// .cartStyle {
//     padding-right: 15px !important;
// }