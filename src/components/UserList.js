import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaUser, FaSearch } from "react-icons/fa";
import "../styles/UserList.css";
import _ from "lodash";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSearch = _.debounce((query) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, 300);

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div className="user-list-container">
      <h2 className="title">Our Users</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>

      <motion.div
        className="user-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <motion.div
              key={user.id}
              className="user-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="avatar">
                <FaUser size={40} />
              </div>
              <h3 className="user-name">{user.name}</h3>
              <p className="user-email">
                <FaEnvelope /> {user.email}
              </p>
              <p className="user-location">
                <FaMapMarkerAlt /> {user.address.city}
              </p>
            </motion.div>
          ))
        ) : (
          <p className="no-results">No users found</p>
        )}
      </motion.div>
    </div>
  );
};

export default UserList;
