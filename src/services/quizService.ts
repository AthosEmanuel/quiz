

const axios = require('axios');

const apiKey = 'x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed'



const getQuiz = async () => {
    try {
        const { data } = await axios.get('https://quizapi.io/api/v1/questions?apiKey=x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed&limit=10');
        return data
    } catch (error) {
        console.error(error)
    }
}


const getEasy = async () => {
    try {
        const { data } = await axios.get('https://quizapi.io/api/v1/questions?apiKey=x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed&difficulty=easy');
        return data
    } catch (error) {
        console.error(error)
    }
}

const getHard = async () => {
    try {
        const { data } = await axios.get('https://quizapi.io/api/v1/questions?apiKey=x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed&difficulty=hard');
        return data
    } catch (error) {
        console.error(error)
    }
}



export { getQuiz }
