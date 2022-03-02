import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import AppRouter from './routers/AppRouter';
import { QueryClientProvider, QueryClient } from "react-query";
import {store} from "./store/store";
import { Provider } from "react-redux";
import "./style/App.css";
import "./style/mainStyling.css";
import "./style/header.css";
import "./style/modal.css";
import "./style/laoding.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


