import { useState } from "react";
import "./UserManagement.css";

export default function UserManagement() {

  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    id: "",
    name: "",
    designation: "",
    contact: "",
    email: "",
    company: "",
    address: ""
  });

  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [showTable, setShowTable] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // clear form
  const clearForm = () => {
    setForm({
      id: "",
      name: "",
      designation: "",
      contact: "",
      email: "",
      company: "",
      address: ""
    });
  };

  // Add User
  const addUser = () => {

    if (!form.id || !form.name) {
      alert("ID and Name required");
      return;
    }

    const exists = users.find(u => u.id === form.id);

    if (exists) {
      alert("User already exists");
      return;
    }

    setUsers([...users, form]);
    clearForm();
  };

  // Update User
  const updateUser = (userId) => {
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...form, id: userId } : user
    );
    setUsers(updatedUsers);
    clearForm();
  };

  // Delete User
  const deleteUser = (userId) => {
    const filteredUsers = users.filter(user => user.id !== userId);
    setUsers(filteredUsers);
    clearForm();
  };

  // Search User
  const searchUser = () => {

    const found = users.find(
      user => user.id === searchId
    );

    setSearchResult(found || null);

    if (!found) {
      alert("No user found with that ID");
    }
  };

  return (
    <div className="container">

      <h2>User Management System</h2>

      {/* Form */}
      <div className="form">

        <input name="id" placeholder="ID" value={form.id} onChange={handleChange} />

        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />

        <input name="designation" placeholder="Designation" value={form.designation} onChange={handleChange} />

        <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} />

        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />

        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />

        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />

      </div>

      {/* Buttons */}
      <div className="buttons">

        <button onClick={addUser}>Add</button>

        <button onClick={() => setShowTable(!showTable)}>View</button>

        <button onClick={clearForm}>Clear</button>

      </div>

      {/* Search */}
      <div className="search">

        <input
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />

        <button onClick={searchUser}>
          Search by ID
        </button>

      </div>

      {/* Search Result */}
      {searchResult && (
        <div className="result">

          <h3>Search Result</h3>

          <p>Name: {searchResult.name}</p>
          <p>Designation: {searchResult.designation}</p>
          <p>Contact: {searchResult.contact}</p>
          <p>Email: {searchResult.email}</p>
          <p>Company: {searchResult.company}</p>
          <p>Address: {searchResult.address}</p>

        </div>
      )}

      {/* Table */}
      {showTable && (
        <table>

          <thead>

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Company</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {users.map(user => (

              <tr key={user.id}>

                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.designation}</td>
                <td>{user.contact}</td>
                <td>{user.email}</td>
                <td>{user.company}</td>
                <td>{user.address}</td>
                <td>
                  <button onClick={() => updateUser(user.id)}>Update</button>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>
      )}

    </div>
  );
}
