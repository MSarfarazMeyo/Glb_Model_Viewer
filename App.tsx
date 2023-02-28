import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import Bottomnav from './src/Navigation/Bottomnav';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Bottomnav />
      </NavigationContainer>
    </>
  );
};

export default App;
