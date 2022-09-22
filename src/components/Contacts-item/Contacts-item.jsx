import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import s from './Contacts-item.module.css';

export default class ContactsItem extends Component {
  onItemHover = e => {
    e.currentTarget.classList.toggle(s.focus);
  };

  render() {
    const { name, number, deleteHandler } = this.props;
    return (
      <li
        onMouseOut={this.onItemHover}
        onMouseOver={this.onItemHover}
        className={s.item}
      >
        <span className={s.name}>{name}:</span>
        <span className={s.num}>{number}</span>
        <Button dlt type="button" onClickHandler={deleteHandler}>
          Delete
        </Button>
      </li>
    );
  }
}

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
