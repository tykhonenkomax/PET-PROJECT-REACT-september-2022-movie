import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {NotFoundPage, Movies, TvShows, Home, MovieDetails} from "./components";


function App() {

  return (
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'home'}/>}/>
          <Route path={'home'} element={<Home/>}/>
          <Route path={'movies'} element={<Movies/>}/>
          <Route path={'tv'} element={<TvShows/>}/>
          <Route path={'movies/:id'} element={<MovieDetails/>}/>
          <Route path={'tv/:id'} element={<MovieDetails/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>

  );
}

export default App;
