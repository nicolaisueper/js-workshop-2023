type CounterProps = {
    count: number;
    increment: () => void;
}

export function Counter({increment, count}: CounterProps) {
    return (<div className="card">
        <button onClick={increment}>
            count is {count}
        </button>
        {count > 4 && <p>
            Edit <code>src/App.tsx</code> and save to test HMR
        </p>}
    </div>)
}
