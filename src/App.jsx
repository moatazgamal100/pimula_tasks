import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from "./Components/LandingPage/LandingPage";
let routers = createBrowserRouter([
  {
    path: '/', element: <LandingPage />}
]);
const App = () => {
  return (
    <RouterProvider router={routers} />
  );
};

export default App;
