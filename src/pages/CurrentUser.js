import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUsers, setError, editUser } from "../redux/actions";
import "./CurrentUser.scss";
function CurrentUser({ users, setUsers, setError, editUser }) {
  useEffect(() => {
    if (users.length <= 0) {
      (async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) setError("Error fetching users");
        else {
          const body = await res.json();
          setUsers(body);
        }
      })();
    }
  }, []);
  const { id } = useParams();

  function handleChange(key, index, newValue) {
    const editedData = { ...users[id] };
    editedData[key] = newValue;
    editUser(editedData, parseInt(index));
  }
  if (users && users.length > 0) {
    const { name, email, phone, username, website } = users[id];

    let userInfo = {
      address: Object.values(users[id].address)
        .filter((value) => value instanceof String || typeof value === "string")
        .join(","),
      companyName: users[id].company.name,
      bs: users[id].company.bs,
      catchPhrase: users[id].company.catchPhrase,
      name: name,
      email,
      phone,
      username,
      website,
    };
    return (
      <form>
        <b> User # {id}</b>
        {Object.keys(userInfo).map((key) => (
          <div key={key} className="user-info">
            <label htmlFor={key}> {key} </label>
            <input
              type="text"
              id={key}
              name={key}
              value={userInfo[key]}
              onChange={(e) => handleChange(key, id, e.target.value)}
              disabled={
                key === "address" ||
                key === "bs" ||
                key === "catchPhrase" ||
                key === "companyName"
              }
            />
          </div>
        ))}
        <Link to="/users"> Return </Link>
      </form>
    );
  } else return null;
}

CurrentUser.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func,
  setError: PropTypes.func,
  editUser: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { users } = state;
  return { users };
};

export default connect(mapStateToProps, { setUsers, setError, editUser })(
  CurrentUser
);
