import { fireEvent, render, screen } from '@testing-library/react';
import ErrorStripe from './ErrorStripe';

describe('Error Stripe component', () => {
  it('should render ErrorStripe component correctly', () => {
    const text = 'ErrorStripe text';
    render(<ErrorStripe text={text} onPressCloseButton={() => {}} />);
    const el = screen.getByText(text);
    expect(el).toBeInTheDocument();
  });

  it('should execute function when user clicks in close button', () => {
    const onPressCloseButton = jest.fn();
    render(<ErrorStripe text="" onPressCloseButton={onPressCloseButton} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onPressCloseButton).toHaveBeenCalledTimes(1);
  });
});
