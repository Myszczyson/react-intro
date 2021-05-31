/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import styles from './SearchResults.scss';


class SearchResults extends React.Component {

  render() {
    const {cards} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
          SearchResults
          </h3>
          <div className={styles.columns}>
            {cards.map(cardsData => (
              <Card key={cardsData.id} {...cardsData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;
