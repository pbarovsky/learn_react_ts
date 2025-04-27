import "./App.css";
import { Route, BrowserRouter, Routes, NavLink } from "react-router-dom";
import { UsersPage } from "./components/UsersPage";
import { TodosPage } from "./components/TodosPage";
import { UserItemPage } from "./components/UserItemPage";
import { TodoItemPage } from "./components/TodoItemPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <EventsExample />
      <Card
        onClick={(num) => console.log("Click", num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Click</button>
      </Card> */}
        <div style={{ display: "flex", gap: "10px" }}>
          <NavLink to={"/users"}>Users</NavLink>
          <NavLink to={"/todos"}>Todos</NavLink>
        </div>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/todos/:id" element={<TodoItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
