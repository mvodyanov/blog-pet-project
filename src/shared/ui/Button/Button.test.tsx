import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe.only('Button', () => {
    test('render', () => {
        // expect(classNames('someClass')).toBe('someClass');
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
