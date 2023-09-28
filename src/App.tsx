import { Outlet, useRouteError } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

interface AppProps {
  isError?: boolean;
}

export const App = ({ isError }: AppProps) => {
  const routeError = useRouteError();

  return (
    <div>
      <Header />
      {!isError ? <Outlet /> : JSON.stringify(routeError)}
      <Footer />
    </div>
  );
};

export default App;
