const Card = {
  cardDetails: {
    url: "/cards",
    method: "GET",
  },
  addCard: {
    url: "/cards",
    method: "POST",
  },

  deleteCard: (id) => ({
    url: `cards/${id}`,

    method: "DELETE",
  }),
};
export default Card;
