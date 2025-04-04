import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://67efe3f42a80b06b88962a08.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  try {
    const res = await axios.get("/contacts");
    return res.data;
  } catch (error) {}
});
