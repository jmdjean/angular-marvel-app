import { ItemGeneral } from './item-general.model';

export interface ComicsGeneral {
    available: number;
    returned: number;
    collectionURI: string;
    items: Array<ItemGeneral>;
}
