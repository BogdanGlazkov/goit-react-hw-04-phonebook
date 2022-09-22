import PropTypes from 'prop-types';
import './Section.css';

export default function Section({ children }) {
    return <section className="section">{children}</section>;
}

Section.propTypes = {
    children: PropTypes.node.isRequired,
}