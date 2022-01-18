import axios from 'axios';
import { useState } from 'react';
    const [advice, setAdvice] = useState("One of the top five regrets people have is that they didn't have the courage to be their true self.");

    async function getAdvice() {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            setAdvice(response.data.slip.advice);
        } catch (error) {
            console.error(error);
        }
    }
