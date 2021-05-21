/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';


class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  
  static defaultProps = {
    icon: settings.defaultColumnIcon,
    addCard: PropTypes.func,
  }

  render() {
    const {cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}><Icon name={this.props.icon}/></span>
          {this.props.title}
        </h3>
        <div className={styles.columns}>
          {cards.map(cardsData => (
            <Card key={cardsData.id} {...cardsData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}

export default Column;
