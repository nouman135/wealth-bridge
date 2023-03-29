// For Add Item to Cart
export const addCart = (post) => {
  return {
    type: "ADDITEM",
    payload: post,
  };
};

// For Delete Item to Cart
export const delCart = (post) => {
  return {
    type: "DELITEM",
    payload: post,
  };
};
