import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setUsers, setError, deleteUser } from "./redux/actions";
import PropTypes from "prop-types";

function Users({ users, error, setError, setUsers, deleteUser }) {
  function handleDelete(index) {
    deleteUser(index);
  }
  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) setError("Error fetching users");
      else {
        const body = await res.json();
        setUsers(body);
      }
    })();
  }, [setError, setUsers]);
  console.log(error);
  return (
    <>
      {error && <b> {error} </b>}
      {users && users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th> name </th>
              <th> email </th>
              <th> phone </th>
              <th> username</th>
              <th> website </th>
              <th> Delete user</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              ({ id, name, email, phone, username, website }, index) => (
                <tr key={id}>
                  <td> {name}</td>
                  <td> {email}</td>
                  <td> {phone}</td>
                  <td> {username}</td>
                  <td> {website}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  const { users, error } = state;
  return { users, error };
};

Users.propTypes = {
  users: PropTypes.array,
  error: PropTypes.string,
  setError: PropTypes.func,
  setUsers: PropTypes.func,
  deleteUser: PropTypes.func,
};
export default connect(mapStateToProps, { setUsers, setError, deleteUser })(
  Users
);
