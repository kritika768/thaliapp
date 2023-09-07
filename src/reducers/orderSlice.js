import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  products: [
    {
      id: 1,
      image:
        "https://www.livingsmartandhealthy.com/wp-content/uploads/2022/08/Paneer-Butter-Masala1.jpg",
      name: "Paneer Butter Masala",
      price: "250",
    },

    {
      id: 2,
      image:
        "https://sublimerecipes.com/wp-content/uploads/2020/06/Chia-Chapati-FI.jpg",
      name: "Chapati",
      price: "15",
    },
    {
      id: 3,
      image:
        "https://florafoods.in/wp-content/uploads/2022/05/Mekkekayi-Pickle-2-.png",
      name: "Pickle",
      price: "20",
    },
    {
      id: 4,
      image:
        "https://rakskitchen.net/wp-content/uploads/2021/09/gulab-jamun.jpg",
      name: "Gulab Jamun",
      price: "100",
    },
    {
      id: 5,
      image:
        "https://www.india.com/wp-content/uploads/2021/06/MicrosoftTeams-image-9.jpg",
      name: "Curd",
      price: "20",
    },
    {
      id: 6,
      image:
        "https://shwetainthekitchen.com/wp-content/uploads/2021/12/Dal-Fry-Recipe.jpg",
      name: "Dal",
      price: "250",
    },
  ],
  thali: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addTothali: (state, action) => {
      state.thali.push(action.payload);
    },
    RemoveItem: (state, action) => {
      state.thali.splice(action.payload, 1);
    },
    // increment: (state, action) => {
    //   const { index } = action.payload;
    //   state.thali[index].value += 1;
    // },
    // decrement: (state, action) => {
    //   const { index } = action.payload;
    //   state.thali[index].value -= 1;
    // },
  },
});

export const { addTothali, RemoveItem } =
  orderSlice.actions;
export default orderSlice.reducer;
