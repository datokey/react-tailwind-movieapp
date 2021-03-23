//componen / page
import Navbar from './components/Navbar'; 
import Create from './page/Create';
import PageNotFound from './page/PageNotFound';
import Body from './page/Body';
import DetailMovie from "./page/DetailMovie";
import DownloadMovie from './page/DownloadMovie';
import SearchResult from './page/SearchResult';

//react router dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// context provider 
import SearchContextProvider from './contexts/SearchContext';
import GenreContextProvider  from './contexts/GenreContext';

const App = () => {
 

  return (
    <>
    <Router>
      <div className="relative flex flex-col justify-between min-h-screen bg-gray-600 font-body">
        <SearchContextProvider>
          <GenreContextProvider>
            {/* navbar */}
            <Navbar />
            {/* body */}
           
            <Switch>
              {/* body page */}
              <Route exact path="/">
                <Body />
                {/* {data && <Body data={data.manga_list} />} */}
                {/* {dataMovie <Body data={dataMovie} title="Anime" />} */}
              </Route>
              <Route path="/detail/:id">
                <DetailMovie />
              </Route>
              <Route path="/Create">
                <Create />
              </Route>
              <Route path="/download/:title/:id">
                <DownloadMovie />
              </Route>
              <Route path="/search/:search/:param">
                <SearchResult />
              </Route>
               
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>

            {/* footer */}
            <div className="flex items-center justify-center">
              <h3 className="p-3 font-serif text-xl">Footer</h3>
            </div>
          </GenreContextProvider>
        </SearchContextProvider>
      </div>
    </Router>
    </>
  );
}

export default App;
