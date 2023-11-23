import axios from "axios";

const URL: string = "http://localhost:4455/api/v1";

export const createAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/create-user`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data: any) => {
  try {
    return await axios.post(`${URL}/login`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};