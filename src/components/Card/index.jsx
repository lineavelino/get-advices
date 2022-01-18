import axios from 'axios';
import { useState } from 'react';
import './styles.scss';

export default function Card() {
    const [advice, setAdvice] = useState("One of the top five regrets people have is that they didn't have the courage to be their true self.");

    async function getAdvice() {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            setAdvice(response.data.slip.advice);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container">
            <h2 className="title">Your advice is:</h2>
            <p className="text">{advice}</p>
            <button type="button" onClick={getAdvice}>Change</button>
        </div>
    )
}
