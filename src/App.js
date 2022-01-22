import React, { useEffect, useState } from "react";
import CreditCard from "./components/CreditCard";
import Form from "./components/Form";
import creditCardType from "credit-card-type";

const flex = {
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

export default function App() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvvCode: "",
    cardType: "",
  });
  const [backFace, setBackFace] = useState(false);

  useEffect(() => {
    let cardNumber = cardInfo.cardNumber.replace(/[^0-9]/g, "");

    if (cardNumber.length > 3) {
      setCardInfo((oldData) => {
        return {
          ...oldData,
          cardType: creditCardType(cardNumber)[0]?.type,
        };
      });
    } else {
      setCardInfo((oldData) => {
        return {
          ...oldData,
          cardType: "",
        };
      });
    }
  }, [cardInfo.cardNumber]);

  return (
    <>
      <div style={flex}>
        <h1>Credit Card Design with React </h1>
      </div>
      <div style={flex}>
        <div>
          <Form setCardInfo={setCardInfo} setBackFace={setBackFace} />
        </div>
        <div>
          <CreditCard cardInfo={cardInfo} backFace={backFace} />
        </div>
      </div>
    </>
  );
}
