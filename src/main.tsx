import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

const publishableKey: string = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ClerkProvider publishableKey={publishableKey}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ClerkProvider>
    </React.StrictMode>
);
