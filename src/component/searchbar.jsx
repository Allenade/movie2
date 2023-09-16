export default function SearchBar({
  placeholder,
  handleChange,
  containerClassName,
}) {
  return (
    <div className={`search-bar-container ${containerClassName}`}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </div>
  );
}
