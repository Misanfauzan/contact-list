import React from "react";
import { createRoot } from "react-dom/client";

import "./Styles/style.css";

import ContactApp from "./Components/ContactApp";

const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);
