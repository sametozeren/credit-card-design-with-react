import "./styles/Form.css";
import InputMask from "react-input-mask";

export default function Form({ setCardInfo, setBackFace }) {
  let onChange = (event) => {
    setCardInfo((oldData) => {
      return { ...oldData, [event.target.name]: event.target.value };
    });
  };

  let onFaceFocus = (event) => {
    setBackFace(true);
  };

  let onFaceBlur = (event) => {
    setBackFace(false);
  };

  return (
    <div className="flex">
      <div className="row">
        <label>Card Number: </label>
        <InputMask
          mask="9999 9999 9999 9999"
          name="cardNumber"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="row">
        <label>Card Holder Name: </label>
        <input
          type="text"
          name="cardHolderName"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="row">
        <label>Expiry Date: </label>
        <InputMask
          mask="99/99"
          name="expiryDate"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="row">
        <label>Cvv: </label>
        <InputMask
          mask="999"
          name="cvvCode"
          onChange={(e) => onChange(e)}
          onFocus={() => onFaceFocus()}
          onBlur={() => onFaceBlur()}
        />
      </div>
    </div>
  );
}
