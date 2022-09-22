import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ filterHandler, filter }) {
    return (
        <label className='label'>
            Find contacts by name
            <input
                className={s.input}
                onChange={filterHandler}
                type="text"
                value={filter}
                placeholder="Start typing the name..."
            ></input>
        </label>
    )
}

Filter.propTypes = {
    filterHandler: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}