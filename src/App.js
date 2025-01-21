import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/Popular";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRated";
import Layout from './component/Layout';


function App() {
  return (
   <div>
    {/*
    * Memmbuat Routing
    * Bungkus Routing menggunakan Rotes.
    * Buat Routing menggunakan Route.
    */}
    <Layout>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/movie/create" element={<CreateMovie />} />
    <Route path="/movie/popular" element={<PopularMovie />} />
    <Route path="/movie/now" element={<NowPlayingMovie />} />
    <Route path="/movie/top" element={<TopRatedMovie />} />
    </Routes>
    </Layout>

   </div>
  );
}

export default App;
