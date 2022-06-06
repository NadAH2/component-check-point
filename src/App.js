import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import React from "react";

import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <div class="container-fluid">
          <a class="navbar-brand" style={{ color: "white" }} href="#">
            Profile
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  style={{ color: "white" }}
                  href="#"
                >
                  Home
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success"
                type="submit"
                style={{ color: "white" }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Container style={{ paddingTop: 100 }}>
        <div
          className="card mb-3 "
          style={{
            maxWidth: 540,
            backgroundColor: "#FFB6C1",
          }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <ProfilePhoto />
            </div>
            <div className="col-md-8">
              <div className="card-body" style={{ paddingTop: 30 }}>
                <h1 className="card-title">
                  <FullName />
                </h1>
                <h5 className="card-title">
                  <Address />
                </h5>
                <p class="card-text">
                  I'm a full stack developer web beginner.This is my profile,
                  enjoy reading...
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
