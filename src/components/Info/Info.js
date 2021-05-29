import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const Info = () => (
  <Container>
    <Container>
      <Hero titleText={settings.info.defaultInfoTitle} imgSrc={settings.info.defaultInfoImage}>
      </Hero>
      {ReactHtmlParser(settings.info.defaultInfoDescription)}
    </Container>
  </Container>
);



export default Info;