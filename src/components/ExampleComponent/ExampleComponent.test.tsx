import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExampleComponent from './ExampleComponent';

describe('<ExampleComponent />', () => {
  test('it should mount', () => {
    render(<ExampleComponent />);
    
    const exampleComponent = screen.getByTestId('ExampleComponent');

    expect(exampleComponent).toBeInTheDocument();
  });
});