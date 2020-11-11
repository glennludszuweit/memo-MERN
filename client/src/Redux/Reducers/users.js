const users = (users = [], action) => {
  switch (action.type) {
    case 'GET_USERS':
      return action.payload;

    case 'ADD_USER':
      return [...users, action.payload];

    default:
      return users;
  }
};

export default users;
