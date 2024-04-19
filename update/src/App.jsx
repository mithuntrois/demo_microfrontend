import React from "react";
import ReactDOM from "react-dom";
import { useStore, StoreProvider } from "store/store";
import Header from "list/header";
import "./index.scss";

const App = () => {
  const { data, add } = useStore();
  console.log({ data });
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div>Name: update</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <button onClick={() => add({ name: "test", status: "pending" })}>
        Add
      </button>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
