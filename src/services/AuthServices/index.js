import axios from "axios";
import { post } from "../http/httpMethods";

const login = async (payload) => {
  try {
    const response = await post(
      "http://localhost:3500/customers/login",
      payload
    );
    return response;
  } catch (error) {
    console.log(error)
    return error?.response?.data;
  }
};

const register = async (payload) => {
  try {
    const response = await post(
      "http://localhost:3500/customers/register",
      payload
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const authenticationService = {
  login,
  register,
};
