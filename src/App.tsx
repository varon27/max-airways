import React from 'react';
// import styled from "styled-components"
// import { BlockLayout } from './common/BlockLayout/BlockLayout';
// import { HeroBlock } from './common/HeroBlock/HeroBlock';
// import { IconBlock } from './common/IconBlock/IconBlock';
// import { IconCard } from './common/IconCard/IconCard';
import { Hero } from './modules/hero/Hero';
import { Theme } from './common/Theme/Theme';
import './App.scss';

const App = () => (
  <Theme>
    <div className="test">here is my page</div>
    <Hero />
  </Theme>
);

export default App;
