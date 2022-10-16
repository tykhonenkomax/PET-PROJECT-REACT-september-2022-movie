import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {NotFoundPage} from "./components/notFoundPage/NotFoundPage";
import {Movies} from "./components";
import {TvShows} from "./components/tvShows/TvShows";
import {Home} from "./components/home/Home";


function App() {

  return (
      <Routes>

        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'home'}/>}/>
          <Route path={'home'} element={<Home/>}/>
          <Route path={'movies'} element={<Movies/>}/>
          <Route path={'tv'} element={<TvShows/>}>
          </Route>

          <Route path={'*'} element={<NotFoundPage/>}/></Route>

      </Routes>

  );
}

export default App;
