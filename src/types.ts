export interface CharacterData {
    age: null | number;
    created_at: string;
    family: string;
    grade: null | string;
    hair_color: string;
    id: number;
    name: string;
    occupation: string;
    religion: string;
    sex: string;
    updated_at: string;
    voiced_by: null | string;
}

export interface SouthParkAPIResponse {
    data: CharacterData[];
    links: {
        first: string,
        last: string,
        next?: string,
        prev?: string,
    },
    meta: {
        current_page: number,
        from: number,
        last_page: number,
        links: Array<{
            url: string,
            label: string,
            active: boolean
        }>,
        path: string,
        per_page: number,
        to: number,
        total: number
    }
}