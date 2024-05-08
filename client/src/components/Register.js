import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8027/api/v1/user/register", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            backgroundImage:
              'linear-gradient(to left bottom, #fc0839, #fc0742, #fb094a, #fa0e52, #f8145a)',
            color: "violet",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            marginTop: 5,
            boxShadow: "10px 10px 20px #ccc",
            padding: 3,
            borderRadius: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase", marginBottom: 3 }}
          >
            Register
          </Typography>
          <TextField
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
            name="name"
            margin="normal"
            type="text"
            required
            sx={{ input: { backgroundColor: "white", borderRadius: '15px' } }}
          />
          <TextField
            placeholder="Email"
            value={inputs.email}
            name="email"
            margin="normal"
            type="email"
            required
            onChange={handleChange}
            sx={{ input: { backgroundColor: "white", borderRadius: '15px' } }}
          />
          <TextField
            placeholder="Password"
            value={inputs.password}
            name="password"
            margin="normal"
            type="password"
            required
            onChange={handleChange}
            sx={{ input: { backgroundColor: "white", borderRadius: '15px' } }}
          />

          <Button
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate("/login")}
            sx={{ marginTop: 3, cursor: "pointer" }}
          >
            Already Registered? Please Login
          </Link>
        </Box>
      </form>
    </>
  );
};

export default Register;
