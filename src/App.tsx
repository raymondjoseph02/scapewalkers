import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ContextProvider } from "./context/ContextProvider";
const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  );
};

export default App;
