import SearchBar from "./searchbar";
export default function Navbar(props) {
  return (
    <>
      <nav>
        <img src="../src/image/tv.png" className="nav--logo" />

        <img src="../src/image/Menu (1).png" />
      </nav>
      <SearchBar
        placeholder="Search..."
        handleChange={props.handleSearch}
        containerClassName="navbar-search-bar"
      />
    </>
  );
}
