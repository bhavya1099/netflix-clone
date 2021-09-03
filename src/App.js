
import './App.css';
import requests from './requests';
import Row from "./Row";
import "./Row.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row titles = "Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
      <Row titles = "Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row titles = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row titles = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row titles = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row titles = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row titles = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row titles = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
