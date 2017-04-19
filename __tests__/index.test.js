import React from 'react';
import { shallow } from 'enzyme';

import Cowsay from '../src/index';

test('Cowsay has text', () => {

  const cowsay = shallow(
      <Cowsay>I am a cow</Cowsay>
  );

  expect(cowsay.text()).toEqual(expect.stringContaining('I am a cow'));
  
});