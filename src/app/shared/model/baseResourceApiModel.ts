import { BaseResourceApiData } from "./baseResourceApiDataModel";

export interface BaseResourceApi {
    code: number,
    status: string,
    copyright: string,
    attributionText: string,
    attributionHTML: string
    etag: string;
    data: BaseResourceApiData;
}