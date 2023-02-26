import {Route, Routes} from "react-router-dom";
import {HomePage, MoviesPage, NotFoundPage, GenrePage, MovieInfoPage, SearchPage, ActorsPage} from "./pages";
import {MainLayouts} from "./layouts";


const App = () => {
 return (
     <div>
         <Routes>
                <Route path={'/'} element={<MainLayouts/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movie'} element={<MoviesPage/>}/>
                    <Route path={'movie/:movieId'} element={<MovieInfoPage/>}/>
                    <Route path={'genre'} element={<GenrePage/>}/>
                    <Route path={'search/movie'} element={<SearchPage/>}/>
                    <Route path={'person'} element={<ActorsPage/>}/>

                </Route>
                    <Route path ={'*'} element={<NotFoundPage/>}/>
         </Routes>
     </div>
 );
};

export {App};