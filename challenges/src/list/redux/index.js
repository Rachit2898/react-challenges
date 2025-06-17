import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApi = createAsyncThunk("fetchApi", async () => {
  const response = await fetch("https://dummyjson.com/products?limit=1000");
  const data = await response.json();
  return data;
});

const initialState = {
  list: [],
  loading: false,
  error: "",
  cart: [],
  itemsPerPage: 5,
  currentPage: 1,
  paginatedItems: [],
};

const paginate = (list, page, size) => {
  const start = (page - 1) * size;
  return list.slice(start, start + size);
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeToCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
      state.paginatedItems = paginate(state.list, state.currentPage, state.itemsPerPage);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.products;
        state.paginatedItems = paginate(state.list, state.currentPage, state.itemsPerPage);
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Failed to fetch";
      });
  },
});

export const { addToCart, removeToCart, setPage } = listSlice.actions;

export default listSlice.reducer;
