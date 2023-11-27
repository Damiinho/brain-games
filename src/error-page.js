import { Button } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "50px",
      }}
    >
      <h1>Work in progress</h1>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <Link to="/">
        <Button variant="contained">back to home page</Button>
      </Link>
    </div>
  );
}
