import React, { Component } from 'react'



export class MovieInfo extends Component {

  render() {
    const movie = this.props.movie
    return (    
      <div>
        <p>Title: {movie.title}</p>
        <p>Director: {movie.director}</p>
        <p>Rating: {movie.rate}</p>
        <hr />
      </div>
    )
  }
}

export default MovieInfo
