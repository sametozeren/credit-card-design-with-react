import "./styles/CreditCard.css";

export default function CreditCard(props) {
  let cardInfo = props.cardInfo;

  return (
    <div className={props.backFace ? "card flip" : "card"}>
      <div className="front">
        <div className="card-top">
          <img src="/img/chip.svg" alt="" />
          {cardInfo.cardType !== "" && cardInfo.cardType === "mastercard" && (
            <img src="/img/master-card.svg" alt="" />
          )}
          {cardInfo.cardType !== "" && cardInfo.cardType === "visa" && (
            <img src="/img/visa.svg" alt="" />
          )}
        </div>
        <div className="card-number">
          {cardInfo.cardNumber || "**** **** **** ****"}
        </div>
        <div className="card-bottom">
          <div>
            <div className="key">Card Holder Name</div>
            <div className="value">
              {cardInfo.cardHolderName || "**** *****"}
            </div>
          </div>
          <div>
            <div className="key">Expiry Date</div>
            <div className="value">{cardInfo.expiryDate || "**/**"}</div>
          </div>
        </div>
      </div>
      <div className="back">
        <div className="card-back">
          CVV <em> {cardInfo.cvvCode || "***"} </em>
        </div>
      </div>
    </div>
  );
}
