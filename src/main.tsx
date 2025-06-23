import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient.ts";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ToastContainer theme="colored" className="text-xs" />
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
