import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import "./index.css";
import { createDirectus, rest } from "@directus/sdk";
import { DirectusContext } from "./context/DirectusContext.jsx";

const directus = createDirectus("http://app.kibrito.com:8055").with(rest());

ReactDOM.createRoot(document.getElementById("root")).render(
  <DirectusContext.Provider value={directus}>
    <ThemeProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ThemeProvider>
  </DirectusContext.Provider>
);
