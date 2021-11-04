const Search = ({ handleSearchChange }) => {
  return (
    <>
      <h1>😎 EmojiSearch 😎</h1>
      <input onChange={handleSearchChange} type="text" placeholder="What emoji are you looking for ?" />
    </>
  );
};

export default Search;
