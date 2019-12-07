import React from 'react';

import App from './App';

import { render } from "@testing-library/react"



test('renders without crashing', () => {
  render(<App/>);

});

test("H1 is rendering", ()=>{
  const container = render(<App/>)
  container.getByText("Most Searched Players")
})