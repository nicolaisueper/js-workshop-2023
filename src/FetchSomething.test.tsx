import {describe, it} from "vitest";
import {render} from "@testing-library/react";
import {FetchSomething} from "./FetchSomething.tsx";
import {SouthParkAPIResponse} from "./types.ts";
import nock from "nock";

const mockReply: SouthParkAPIResponse = {
    data: [{
        "id": 1,
        "name": "Gerald Broflovski",
        "age": null,
        "sex": "Male",
        "hair_color": "Brown",
        "occupation": "Lawyer",
        "grade": null,
        "religion": "Judaism",
        "voiced_by": null,
        "created_at": "2022-03-10T17:02:56.000000Z",
        "updated_at": "2022-03-10T17:02:56.000000Z",
        "url": "https://spapi.dev/api/characters/1",
        "family": "https://spapi.dev/api/families/1",
    }],
    links: {
        first: "",
        last: "",
        next: "",
        prev: ""
    },
    meta: {}
} as never as SouthParkAPIResponse;

describe('<FetchSomething />', () => {
    it('should render without crashing', () => {
        nock("https://spapi.dev")
            .defaultReplyHeaders({
                "access-control-allow-origin": "*",
            })
            .get("/api/characters")
            .reply(200, mockReply);

        const {queryByText} = render(<FetchSomething />);
        expect(queryByText("Gerald Broflovski"))
    });
});
