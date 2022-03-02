export  interface Pages{
    count: number,
    next: string | null,
    previous: string | null,
    results: {
        name: string,
        url: string
    }[]
}

export interface queryResponse {
    pages: Pages[],
    pageParams: any[],
}