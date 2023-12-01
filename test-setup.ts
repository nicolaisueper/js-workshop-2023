import { afterEach, vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';


const fetchMocker = createFetchMock(vi);

// sets globalThis.fetch and globalThis.fetchMock to our mocked version
fetchMocker.enableMocks();

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
});