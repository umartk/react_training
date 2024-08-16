import * as React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider
} from "react-router-dom";
import LifeCycle from "./lifecycle";
import Form, { UncontrolledForm } from "./form";
import List from "./list";
import Details from "./detail/index";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LifeCycle />} />
      <Route path="form" element={<Form />} />
      <Route path="form/uncontrolled" element={<UncontrolledForm />} />
      <Route path="list" element={<List />} />
      <Route path="product/:id" element={<Details />} />
    </Route>
  )
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return <RouterProvider router={router} />;
}

function Layout() {
  return (
    <>
      <nav style={{ display: "flex", backgroundColor: "#fc5110", padding: "16px", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/"><h2 style={{ color: "whitesmoke" }}> Tkxel </h2></Link>
        <div>
          <Link to="/">Life Cycle</Link>&nbsp;&nbsp;
          <Link to="/form">Form controlled</Link>&nbsp;&nbsp;
          <Link to="/form/uncontrolled">Form uncontrolled</Link>&nbsp;&nbsp;
          <Link to="/list">List</Link>&nbsp;&nbsp;
        </div>
      </nav>
      <div style={{ textAlign: "center", padding: "32px" }}>
        <Outlet />
      </div>


    </>
  );
}


