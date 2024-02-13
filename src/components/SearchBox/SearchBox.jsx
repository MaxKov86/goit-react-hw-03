import css from './SearchBox.module.css';


const SearchBar = ({ value, onChange }) => {
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
				value={value}
			/>
		</>
	);
};
export default SearchBar;
