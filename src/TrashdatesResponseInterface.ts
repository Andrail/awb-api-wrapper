export interface TrashdatesResponse {
    trashdates: Trashdates;
}

export interface Trashdates {
    trashdate: Array<Trashdate>;
}

export interface Trashdate {
    day: number;
    month: number;
    year: number;
    typ: string;
}
