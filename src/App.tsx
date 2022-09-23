import React from "react";
import { Provider } from "react-redux";
import store from "./redux/createStore";
import InputSection from "./components/NoteCreationComponent";
import NoteDashboard from "./components/NoteDashboardComponent";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>My Notes</h1>
        <InputSection />
        <div className="line"></div>
        <NoteDashboard />
      </div>
    </Provider>
  );
}

export default App;
