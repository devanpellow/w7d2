import React, { Component } from "react";
import MovieInfo from "./MovieInfo"

class MoviesList extends Component {
  render() {   

    const elements = this.props.movies.map(movie => {

      return <MovieInfo key={movie.id} movie={movie} />
    })
    return <div>{elements}</div>
  }
}

export default MoviesList;
