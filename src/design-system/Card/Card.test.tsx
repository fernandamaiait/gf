import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders Card content', () => {
  const text = 'Card test';
  render(
    <Card>
      <div>{text}</div>
    </Card>
  );
  const el = screen.getByText(text);
  expect(el).toBeInTheDocument();
});
