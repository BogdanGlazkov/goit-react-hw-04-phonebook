import PropTypes from 'prop-types';
import ContactsItem from 'components/Contacts-item';
import s from './Contacts-list.module.css';

export default function ContactsList({ contacts, onDeleteBtn }) {
  const elements = contacts.map(({ id, name, number }) => (
    <ContactsItem
      key={id}
      name={name}
      number={number}
      deleteHandler={() => onDeleteBtn(id)}
    />
  ));

    return <ul className={s.list}>{elements}</ul>
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onDeleteBtn: PropTypes.func.isRequired,
}
