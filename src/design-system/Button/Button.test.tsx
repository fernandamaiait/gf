import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render Button component correctly', () => {
    render(<Button text="" onClick={() => {}} />);
    const el = screen.getByRole('button');
    expect(el).toBeInTheDocument();
  });

  it('should render Button text correctly', () => {
    const text = 'Button text';
    render(<Button text={text} onClick={() => {}} />);
    const el = screen.getByText(text);
    expect(el).toBeInTheDocument();
  });

  it('should execute function when user clicks on Button', () => {
    const onClick = jest.fn();
    render(<Button text="" onClick={onClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should be enabled', () => {
    render(<Button text="" onClick={() => {}} disabled={false} />);
    const el = screen.getByRole('button');
    expect(el).toBeEnabled();
  });
  it('should be disabled', () => {
    render(<Button text="" onClick={() => {}} disabled={true} />);
    const el = screen.getByRole('button');
    expect(el).toBeDisabled();
  });
});
