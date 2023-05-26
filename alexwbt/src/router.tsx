import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<App />}>
    </Route>
  )
);
