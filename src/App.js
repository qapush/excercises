import List from './List';
import Genres from './Genres';
import React from 'react';
import movies from './movies.json';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      movies: null,
      genres: null
    }
    this.setGenres = this.setGenres.bind(this);
  }

  setGenres(genres){
    this.setState({ genres })
  }

  componentDidMount(){
    this.setState({
      movies: movies.results.slice(0,10)
    })
  }

 
  render(){

    return (
      <div>
        <List movies={this.state.movies} onClick={this.setGenres}/>
        <Genres genres={this.state.genres}/>
      </div>
    );
  }
}
  


export default App;
