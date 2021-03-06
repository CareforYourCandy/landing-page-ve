export const setUsers = (users) => ({
  type: "SET_USERS",
  payload: users,
});

export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});

export const editUser = (user, index) => ({
  type: "EDIT_USER",
  payload: user,
  index: index,
});
export const deleteUser = (index) => ({
  type: "DELETE_USER",
  payload: index,
});
