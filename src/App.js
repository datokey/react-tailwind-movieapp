import Navbar from './components/Navbar';
import About from './page/About';
import Create from './page/Create';
import PageNotFound from './page/PageNotFound';
import Body from './page/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailMovie from "./page/DetailMovie";
import DownloadMovie from './page/DownloadMovie';
import SearchResult from './page/SearchResult';

import SearchContextProvider from './contexts/SearchContext'

const App = () => {
  return (
    <Router>
     
        <div className="flex flex-col min-h-screen justify-between bg-gray-300 font-body">
          <SearchContextProvider>
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
            <Route path="/about">
              <About />
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
            <Route path="/search/:title">
              <SearchResult />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>

          {/* footer */}
          <div className="flex items-center justify-center">
            <h3 className="font-serif p-3 text-xl">Footer</h3>
          </div>
      </SearchContextProvider>
        </div>
    </Router>
  );
}

export default App;
