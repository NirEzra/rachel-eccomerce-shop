import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";

import { Container } from "react-bootstrap";
import { AuthProvider } from "./components/contexts/AuthContext";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Header />
          <HomePage />
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div >
              <AppRouter />
            </div>
          </Container>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
