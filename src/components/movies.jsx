import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like.jsx";
import Pagination from "./common/pagination";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      movies: movies,
    });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({
      movies: movies,
    });
  };

  handlePageChange = (page) => {
    console.log(page);
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) {
      return <p>There are no movies in the database.</p>;
    }
    return (
      <React.Fragment>
        {" "}
        <p>Showing {count} movies in the database.</p>
        <table className="table table-striped">
          <thead className="table-primary">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rent</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td scope="row">{movie.title}</td>
                <td scope="row">{movie.genre.name}</td>
                <td scope="row">{movie.numberInStock}</td>
                <td scope="row">{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  ></Like>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        ></Pagination>
      </React.Fragment>
    );
  }
}

export default Movies;
