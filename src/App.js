import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import "./Banner.css";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}isLargeRow
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horrer Movie" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />  
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documents" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
