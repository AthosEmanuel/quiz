import axios from "axios";

const api = "https://opentdb.com/api.php?amount=10";

const getQuestions = async (category: any, difficulty: any) => {
  try {
    if (Number(difficulty) === 4) {
      const { data } = await axios.get(
        `${api}&category=${category}&type=multiple`
      );
      return data;
    } else {
      const { data } = await axios.get(
        `${api}&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export { getQuestions };
