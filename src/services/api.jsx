import axios from "axios";

const getUserAccount = async () => {
  try {
    return await axios.get(
      "https://675e7ce663b05ed0797a446e.mockapi.io/account"
    );
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export { getUserAccount };
