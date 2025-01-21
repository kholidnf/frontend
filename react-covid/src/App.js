import Home from "./pages/Home";
//import Routes dan Routed dari react router
import { Routes, Route } from "react-router-dom";
import IndonesianCovid from "./pages/covid/IndonesianCovid";
import ProvincesCovid from "./pages/covid/ProvincesCovid";
import About from "./pages/covid/About";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme/theme";
function App() {
  return (
    <div>
      {/*
       * Membuat Routing
       * Routes => Router(routing)
       */}
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/covid/indonesia"
              element={<IndonesianCovid />}
            ></Route>
            <Route path="/covid/provinsi" element={<ProvincesCovid />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
