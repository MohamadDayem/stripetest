
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from "axios";

export const ChecKoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: card,
        });

        if (!error) {
            console.log("Token Generated: ", paymentMethod);
        } else {
            console.error("Error creating payment method: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <CardElement
                options={{
                    hidePostalCode: true,
                }}
            />
            <button type="submit">Pay</button>
        </form>
    );
};
