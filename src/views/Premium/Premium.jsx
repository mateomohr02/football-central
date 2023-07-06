import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/CardPremium/CardPremium";
import "./PaypalButton.css";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../../redux/actions/updateUserProfile";

const Premium = () => {
  const [error, setError] = useState(null);
  const [paidFor, setPaidFor] = useState(false);
  const userProfile = useSelector((state) => state.user.userProfile);
  const dispatch = useDispatch();
  const loggedUserID = localStorage.getItem("id");
  
  const handleApprove = async (orderID, price) => {
    setPaidFor(true);
    await dispatch(updateUserProfile(loggedUserID, { isPremium: true }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card />

        <PayPalScriptProvider
          options={{
            "client-id":
              "AT-UuP_m-l12lYgbpzNTwHUB0O44OeEPBNht2k2wTy5MWiohCg-hcRMImfIs367iukWgQMNud4P1sz1k",
          }}
        >
          <PayPalButtons
            className="custom-button"
            style={{ layout: "vertical", height: 55, color: "gold" }}
            onClick={(data, actions) => {
              const hasAlreadyBought = false;
              if (hasAlreadyBought) {
                setError("You already bought this item!");
                return actions.reject();
              } else {
                return actions.resolve();
              }
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "1",
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              const order = await actions.order.capture();
              handleApprove(data.orderID, order.purchase_units[0].amount.value);
              window.location.replace("/success");
            }}
            onCancel={() => {}}
            onError={(err) => {
              setError(err);
              console.log("Paypal Checkout Error:", err);
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Premium;