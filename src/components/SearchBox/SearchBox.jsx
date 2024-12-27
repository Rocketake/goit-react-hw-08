import { useDispatch, useSelector } from 'react-redux'
import s from './SearchBox.module.css'
import { changeFilter, selectNameFilter } from '../../redux/filters/slice'

const SearchBox = () => {
  const filter = useSelector(selectNameFilter)
  	const dispatch = useDispatch()
  return (
    <div className={s.wrapper}>
      <span>Find contacts by name</span>
      <input type="text" value={filter} onChange={(e) => {dispatch(changeFilter(e.target.value))}}/>
  </div>
  )
}

export default SearchBox