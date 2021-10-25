export interface BaseResourceApiData {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<any>;
}