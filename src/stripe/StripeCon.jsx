
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ChecKoutForm } from "./ChekoutForm";

const PUBLIC_KEY ="pk_test_51Pt88IHdh7CGZQZ2h4h2qHSHDLRHx6NVUEvWgGjxIN1pCe7CGhQe6oUMoQTDUBQVAvMtnaq33hknOqsVwUsgmNKA00tA9e6jZE";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const stripe = ()=>{
    return(
        <Elements stripe={stripeTestPromise}>
            <ChecKoutForm/>
        </Elements>

    );
};

export default stripe;