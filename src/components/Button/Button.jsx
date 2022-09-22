import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Button.module.css';

export default function Button({ type, dlt = false, sbmt = false, onClickHandler, children }) {
    return (
        <button className={classNames(s.btn, {
            [s.dlt]: dlt && !sbmt,
            [s.sbmt]: sbmt,
        })}
            type={type}
            onClick={onClickHandler}>
            {children}
            </button>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    dlt: PropTypes.bool,
    sbmt: PropTypes.bool,
    onClickHandler: PropTypes.func,
    children: PropTypes.node.isRequired,
}