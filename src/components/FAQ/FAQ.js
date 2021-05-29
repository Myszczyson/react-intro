import React from 'react';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import ReactHtmlParser from 'react-html-parser';

const FAQ = () => (
  <Container>
    <Container>
      <Hero titleText={settings.FAQ.defaultFAQTitle} imgSrc={settings.FAQ.defaultFAQImage}>
      </Hero>
      {ReactHtmlParser(settings.FAQ.defaultFAQDescription)}
    </Container>
  </Container>
);

export default FAQ;