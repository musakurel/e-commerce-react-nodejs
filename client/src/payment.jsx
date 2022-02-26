import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate=useNavigate()
  const onToken = (token) => {
    console.log("tokenımız", token)
    setStripeToken(token);
  };
  useEffect(() => {
    const payRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log("this is res.data", res.data);
        navigate("/success")
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && payRequest();
  }, [stripeToken]);
  const KEY =
    "pk_test_51KAxArE2cA6gXAOTA69DOqiH3JHqy7m6AQUqyyhYJj9vvUcbY7r5BCpsfme7AIHzCjfc83KmDcLpYMM6vQVYrIZZ00AsNVQ2qi";

  return (
    <div>
      payment
      {stripeToken? <span>Order processing</span>: 
      <StripeCheckout
      name="Comma co"
      description="Bid data stuff"
      image="https://avatars.githubusercontent.com/u/14985020?s=200&v=4"
      shippingAddress
      billingAddress={false}
      amount={2000}
      token={onToken}
      stripeKey={KEY}
      >
        <button>click to pay</button>
      </StripeCheckout>
      }
    </div>
  );
};

export default Payment;
