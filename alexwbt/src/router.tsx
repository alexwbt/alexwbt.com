import App from "@src/components/App";
import ChatPage from "@src/pages/chat";
import HomePage from "@src/pages/home";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<App />}>
      <Route path="home" element={<HomePage />} />
      <Route path="chat" element={<ChatPage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Route>
  )
);
