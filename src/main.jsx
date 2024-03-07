import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import App from "./App.jsx";
import Land from "./Land.jsx";
import axios from "axios";
import { useEffect} from "react";

export default function Main() {
  const [data, setdata] = useState([]);
  
  useEffect(() => {
    axios
    .get(" https://restcountries.com/v3.1/all")
    .then((reponse)=>setdata(reponse.data))
    .catch((error) => console.log(error));
    
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App data={data}/>,
    },
    {
      path:"/:id",
      element:<Land data={data} />
  
    },
  ]);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);