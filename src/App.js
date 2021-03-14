// import Home from './page/Home';
import Navbar from './components/Navbar';
import About from './page/About';
import Create from './page/Create';
import PageNotFound from './page/PageNotFound';
import Body from './page/Body';


//import useFetchAnime from './hook/useFetch';
// import Loading from './components/Loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailMovie from "./page/DetailMovie";
import DownloadMovie from './page/DownloadMovie';

const App = () => {

  // const { data } = useFetch(
  //   "https://mangamint.kaedenoki.net/api/manga/popular/1"
  // );


  return (
    <Router>
      <div className="flex flex-col min-h-screen justify-between bg-gray-300 font-body">
        {/* navbar */}
        <Navbar />
        {/* body */}
        <Switch>
          {/* body page */}
          <Route exact path="/">
            <Body/>
            {/* {data && <Body data={data.manga_list} />} */}
            {/* {dataMovie <Body data={dataMovie} title="Anime" />} */}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/detail/:id">
            <DetailMovie/>
          </Route>
          <Route path="/Create">
            <Create />
          </Route>
          <Route path="/download/:title/:id">
              <DownloadMovie/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>

        {/* footer */}
        <div className="flex items-center justify-center">
          <h3 className="font-serif p-3 text-xl">Footer</h3>
        </div>
      </div>
    </Router>
  );
}

export default App;
