import Movie from "./movie";
import Search from "./search";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Movie App</h1>
        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;
