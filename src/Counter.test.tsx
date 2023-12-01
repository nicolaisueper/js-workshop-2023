import {describe, it, expect, vi} from "vitest";
import {render, fireEvent, act} from '@testing-library/react'
import {Counter} from "./Counter.tsx";
import '@testing-library/jest-dom/vitest';

describe('<Counter/>', () => {
    it("renders without crashing", () => {
        render(<Counter count={0} increment={() => {}}/>)
    })
    it('should not show additional text if count is less than 5', () => {
        const {queryByText} = render(<Counter count={0} increment={() => {}}/>)

        expect(queryByText(/and save to test HMR/)).toBe(null);
    });

    it('should show additional text if count is greater than 4', () => {
        const {queryByText} = render(<Counter count={5} increment={() => {}}/>)

        expect(queryByText(/and save to test HMR/)).toBeInTheDocument();
    });

    it('should call increment on counter button click', () => {
        const handleIncrement = vi.fn();
        const {getByText} = render(<Counter count={0} increment={handleIncrement} />)
        const buttonElement = getByText(/count/);

        act(() => {
            fireEvent.click(buttonElement);
        })

        expect(handleIncrement).toHaveBeenCalledTimes(1);
    });
});
