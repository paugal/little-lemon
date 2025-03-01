import "./App.css";
import { Footer, Header, Main, Nav } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from "./components/bookingPage";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI } from "./utils/fakeAPI";
import { FormProvider } from "./context/FormContext";

export function timesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.times;
    default:
      return state;
  }
}

export async function initializeTimes() {
  const today = new Date().toISOString().split("T")[0]; // Fecha de hoy en formato 'YYYY-MM-DD'
  const times = await fetchAPI(today);
  return times;
}

function App() {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  useEffect(() => {
    async function fetchInitialTimes() {
      const initialTimes = await initializeTimes();
      dispatch({ type: "UPDATE_TIMES", times: initialTimes });
    }
    fetchInitialTimes();
  }, []);

  const updateTimes = async (date) => {
    const times = await fetchAPI(date);
    dispatch({ type: "UPDATE_TIMES", times });
  };

  return (
    <BrowserRouter basename="little-lemon">
      <div className="App">
        <div className="headerNav">
          <div className="headerNav-container">
            <Header />
            <Nav />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="reservations"
            element={
              <FormProvider>
                <BookingPage
                  availableTimes={availableTimes}
                  updateTimes={updateTimes}
                ></BookingPage>
              </FormProvider>
            }
          />
          <Route path="about" element={<div>About Page</div>} />
          <Route path="menu" element={<div>Menu Page</div>} />
          <Route path="order" element={<div>Order Online Page</div>} />
          <Route path="login" element={<div>Login Page</div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
