import { ItemGeneral } from "./item-general.model";

export interface StoriesGeneral {
    available: number;
    returned: number;
    collectionURI: string;
    items: Array<ItemGeneral>
}