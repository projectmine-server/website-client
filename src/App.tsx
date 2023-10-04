import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error from "./routes/Error/Error";

interface AppProps {
  isError?: boolean;
}

export const App = ({ isError }: AppProps) => {
  return (
    <div>
      <Header />
      {!isError ? <Outlet /> : <Error />}
      <Footer />
    </div>
  );
};

export default App;
