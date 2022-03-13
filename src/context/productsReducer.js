export default (state, action) => {
  switch (action.type) {
    case "PRODUCT_ADD":
      return {
        ...state,
        products: [...state.products, { name: action.payload }]
      };
    default:
      return state;
  }
};
