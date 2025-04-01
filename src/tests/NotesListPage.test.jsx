import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import { act } from "react";
import AppRouter from "../router/AppRouter";
import { AuthProvider } from "../context/AuthContext";

const TEST_USERNAME = process.env.REACT_APP_TEST_USERNAME;
const TEST_PASSWORD = process.env.REACT_APP_TEST_PASSWORD;

const setup = async () => {
    render(
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    );
  
    // Wait for either login or notes page
    await waitFor(() => {
      expect(
        screen.queryByTestId("notes-list-page") || screen.queryByTestId("login-form")
      ).toBeInTheDocument();
    });
  
    // If login is needed
    if (screen.queryByTestId("login-form")) {
      fireEvent.change(screen.getByTestId("username-input"), {
        target: { value: TEST_USERNAME },
      });
      fireEvent.change(screen.getByTestId("password-input"), {
        target: { value: TEST_PASSWORD },
      });
      fireEvent.click(screen.getByTestId("login-button"));
  
      // Wait for main notes page
      await waitFor(() => screen.getByTestId("notes-list-page"));
    }
  };
  
  

describe("NotesListPage", () => {
  it("creates a new note", async () => {
    await setup();

    fireEvent.click(screen.getByTestId("create-button"));
    fireEvent.change(screen.getByPlaceholderText("Note title"), {
      target: { value: "Test Note" },
    });
    fireEvent.change(screen.getByPlaceholderText("Note content"), {
      target: { value: "This is a test note" },
    });
    fireEvent.click(screen.getByText("Create"));

    expect(await screen.findByText("Test Note")).toBeInTheDocument();
  });

  it("deletes an existing note", async () => {
    await setup();

    fireEvent.click(screen.getByTestId("create-button"));
    fireEvent.change(screen.getByPlaceholderText("Note title"), {
      target: { value: "Delete Me" },
    });
    fireEvent.change(screen.getByPlaceholderText("Note content"), {
      target: { value: "To be deleted" },
    });
    fireEvent.click(screen.getByText("Create"));

    const noteTitle = await screen.findByText("Delete Me");
    const noteItem = noteTitle.closest("li");
    const deleteBtn = noteItem.querySelector('[data-testid="delete-btn"]');
    fireEvent.click(deleteBtn);

    await act(async () => {
      fireEvent.click(screen.getByText("Delete"));
    });

    await waitFor(() => {
      expect(screen.queryByText("Delete Me")).not.toBeInTheDocument();
    });
  });
});