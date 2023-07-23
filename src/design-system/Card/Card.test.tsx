import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component ', () => {
  it('renders Card component correctly', () => {
    const text = 'Card test';
    render(
      <Card>
        <div>{text}</div>
      </Card>
    );
    const el = screen.getByText(text);
    expect(el).toBeInTheDocument();
  });
});
