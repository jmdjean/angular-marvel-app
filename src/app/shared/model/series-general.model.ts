import { ItemGeneral } from "./item-general.model";

export interface SeriesGeneral {
    available: number;
    returned: number;
    collectionURI: string;
    items: Array<ItemGeneral>
}