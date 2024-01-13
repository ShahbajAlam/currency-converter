import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { CurrencyProvider } from "./contexts/CurrencyContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <CurrencyProvider>
        <App />
    </CurrencyProvider>
);
