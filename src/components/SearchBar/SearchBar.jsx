import css from './SearchBar.module.css';
// import { Contact } from '../ContactList/Contact/Contact';

export const SearchBar = ({ value, onChange }) => {
  const handleChange = e => {
    let searchValue = e.target.value;
    onChange(searchValue);
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        onChange={handleChange}
        className={css.searchBar}
        type="text"
        name="text"
        value={value}
      />
    </>
  );
};
