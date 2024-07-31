import { act, render, screen } from "@testing-library/react";
import BookingForm from "../components/bookingForm";
import { initializeTimes, timesReducer } from "../App";

test("Renders the BookingForm heading", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const mockUpdateTimes = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      updateTimes={mockUpdateTimes}
    />
  );
  const headingElement = screen.getByText(/reservation/i);
  expect(headingElement).toBeInTheDocument();
});

// Test para initializeTimes
test("initializeTimes devuelve los horarios iniciales correctos", () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

// Test para updateTimes (timesReducer)
test("timesReducer devuelve el estado correcto cuando se llama a updateTimes", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: "UPDATE_TIMES", date: "2024-07-29" };
  const newState = timesReducer(initialState, action);

  // Verifica que el nuevo estado es el mismo que el estado inicial
  expect(newState).toEqual(initialState);
});
