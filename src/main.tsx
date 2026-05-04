import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Supports weights 100-900
import "@fontsource-variable/roboto/wght.css";
// Supports weights 100-900
import "@fontsource-variable/inter/wght.css";
import "./styles/style.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
