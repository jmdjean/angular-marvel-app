import { ComicsGeneral } from 'src/app/shared/model/comics-general.model';
import { EventsGeneral } from 'src/app/shared/model/events-general.model';
import { SeriesGeneral } from 'src/app/shared/model/series-general.model';
import { StoriesGeneral } from 'src/app/shared/model/stories-general.model';
import { Thumbnail } from 'src/app/shared/model/thumbnail.model';
import { Url } from 'src/app/shared/model/url.model';

export interface Character {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    thumbnail: Thumbnail;
    imageUrl: string;
    urls: Array<Url>;
    comics: ComicsGeneral;
    stories: StoriesGeneral;
    events: EventsGeneral;
    series: SeriesGeneral;
};