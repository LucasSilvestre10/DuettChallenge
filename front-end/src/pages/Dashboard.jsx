import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Container, Typography, Box, Button } from '@mui/material';
import LoadingSpinner from '../components/LoadingSpinner';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Api from "../Services/Api";

const Dashboard = () => {
  const { user, logout } = useAuth();
 const [loading, setLoading] = useState(false);
 const { login } = useAuth();
 const navigate = useNavigate();

 const checkLogged = async () => {
  setLoading(true);
  const tokenCookies = Cookies.get("token");    
  if (tokenCookies) {
    const tokenData = JSON.parse(tokenCookies);
    isLogged(tokenData.id);
  } else {
    setLoading(false);
  }
};

const isLogged = async (id) => {
  try {
    const responseUser = await Api.get(`/User/by-id/${id}`);
    login(responseUser.data);
    if (responseUser.data.role === "User") {
      navigate("/dashboard");
    } else if (responseUser.data.role === "Admin") {
      navigate("/admin");
    }
  } catch (error) {
    console.log("Failed to check user login status", error);
  } finally {
    setLoading(false);
  }
};

const returnToLogin = () => {
  navigate("/login")
}

 useEffect(() => {
  checkLogged();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    loading ? (
      <LoadingSpinner />
    ) : (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        {user ? (
          <Box>
            <Typography variant="h6">Hello World!!!</Typography>
            <Typography variant="h6">Welcome, {user.name}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Button variant="contained" color="secondary" onClick={logout}>
              Logout
            </Button>
          </Box>
        ) : (
          <Box>
          <Typography>You are not logged in.</Typography>
          <Button variant="contained" color="secondary" onClick={returnToLogin}>
          Return to Login
            </Button>
            </Box>
        )}
      </Box>
    </Container>
    )
  );
};

export default Dashboard;
