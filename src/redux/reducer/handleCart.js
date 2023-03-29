const wallet = [];

const handleCart = (state = wallet, action) => {
  const post = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if post already in wallet
      const exist = state.find((x) => x.id === post.id);
      if (exist) {
        // Increase the quantity
        return state.map((x) =>
          x.id === post.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...post, qty: 1 }];
      }
      // break;
    case "DELITEM":
      const exist2 = state.find((x) => x.id === post.id);
      if (exist2.qty === 1) {
        return state.filter((x) => x.id !== exist2.id);
      } else {
        return state.map((x) =>
          x.id === post.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      // break;

    default:
      return state;
      // break;
  }
};

export default handleCart;
