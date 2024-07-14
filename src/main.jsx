import store from "@/redux/store.js";
import { queryClient } from "@/utils/index.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "aos/dist/aos.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            <HelmetProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </HelmetProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
