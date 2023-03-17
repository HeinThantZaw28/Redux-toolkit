import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Hein Hein" },
  { id: 2, name: "Thant Thant" },
  { id: 3, name: "Zaw Zaw" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
