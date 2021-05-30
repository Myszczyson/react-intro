import React from 'react';
import PropTypes from 'prop-types';
import LinkList from '../LinkList/ListLink';
import styles from './Home.scss';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <div id="home">
        <main className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {lists.map(listData => (
            <LinkList key={listData.id} {...listData} />
          ))}     
        </main>
      </div>
    );
  }
}

export default Home;
