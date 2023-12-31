import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppProvider from "./contexts/AppContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Game from "./routes/game";
import PlusGame from "./routes/Games/Plus/plus";
import MinusGame from "./routes/Games/Minus/minus";
import DivisionGame from "./routes/Games/Division/division";
import BirdWatchingGame from "./routes/Games/BirdWatching/birdwatching";
import HighOrLowGame from "./routes/Games/High or Low/highorlow";
import SwipeMasterGame from "./routes/Games/Swipe Master/swipemaster";
import FollowTheLeaderGame from "./routes/Games/Follow the leader/followtheleader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "game",
        element: <Game />,
      },
      {
        path: "plus",
        element: <PlusGame />,
      },
      {
        path: "minus",
        element: <MinusGame />,
      },
      {
        path: "division",
        element: <DivisionGame />,
      },
      {
        path: "birdwatching",
        element: <BirdWatchingGame />,
      },
      {
        path: "highorlow",
        element: <HighOrLowGame />,
      },
      {
        path: "swipemaster",
        element: <SwipeMasterGame />,
      },
      {
        path: "followtheleader",
        element: <FollowTheLeaderGame />,
      },
    ],
  },
  {
    path: "games",
    element: <Game />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
