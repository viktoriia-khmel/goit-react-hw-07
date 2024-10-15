import s from './SearchBox.module.css'
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/filtersSlice";


const SearchBox = () => {
  const searchTerm = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
      <div>
          <p>Find contacts by name</p>
      <input className={s.input} type="text" placeholder='Search...' value={searchTerm}
        onChange={handleInputChange} />
          
    </div>
  )
}

export default SearchBox
