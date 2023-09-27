import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId="487971845664-jd2otmmbsfm1s7bt1qmj4ns93hh5bv7s.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
);
