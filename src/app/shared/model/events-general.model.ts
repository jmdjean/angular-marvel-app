import { ItemGeneral } from "./item-general.model";

export interface EventsGeneral {
    available: number;
    returned: number;
    collectionURI: string;
    items: Array<ItemGeneral>
}