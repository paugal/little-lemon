import { act, render, screen, waitFor } from "@testing-library/react";
import BookingForm from "../components/bookingForm";
import { FormProvider, FormContext } from "../context/FormContext";
import { initializeTimes, timesReducer } from "../App";
import { fetchAPI } from "../utils/fakeAPI";
import userEvent from "@testing-library/user-event";

jest.mock("../utils/fakeAPI");

// Test para initializeTimes
test("initializeTimes devuelve los horarios iniciales correctos", async () => {
  fetchAPI.mockResolvedValue([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const initialTimes = await initializeTimes();
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
  const action = { type: "UPDATE_TIMES", times: initialState };
  const newState = timesReducer(initialState, action);

  // Verifica que el nuevo estado es el mismo que el estado inicial
  expect(newState).toEqual(initialState);
});

// Test para BookingForm con el contexto
test("Renders the BookingForm and allows form submission", async () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const mockUpdateTimes = jest.fn();
  const formData = {
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
    name: "",
    isSubmitted: false,
  };
  const setFormData = jest.fn();

  render(
    <FormProvider>
      <FormContext.Provider value={{ formData, setFormData }}>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={mockUpdateTimes}
        />
      </FormContext.Provider>
    </FormProvider>
  );

  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  const nameInput = screen.getByLabelText(/your name/i);
  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i,
  });

  await act(async () => {
    userEvent.type(dateInput, "2024-07-31");
    userEvent.selectOptions(timeSelect, "18:00");
    userEvent.clear(guestsInput);
    userEvent.type(guestsInput, "2");
    userEvent.selectOptions(occasionSelect, "Other");
    userEvent.type(nameInput, "John Doe");
    userEvent.click(submitButton);
  });

  // Esperar a que setFormData sea llamado con los valores correctos
  await waitFor(() => {
    expect(setFormData).toHaveBeenLastCalledWith({
      date: "2024-07-31",
      time: "18:00",
      guests: 2,
      occasion: "Other",
      name: "John Doe",
      isSubmitted: true,
    });
  });
});
