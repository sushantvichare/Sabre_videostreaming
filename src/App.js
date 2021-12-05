import Row from './Row';
import './App.css';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
     <Nav/>
     <Banner/>
     <Row title="Sabre Originals" fetchUrl={requests.fetchNetflixOriginals} 
       isLargeRow
     />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}
       isLargeRow
     />
     
    </div>
  );
}

export default App;
