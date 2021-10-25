import { ComicsGeneral } from 'src/app/shared/model/comics-general.model';
import { EventsGeneral } from 'src/app/shared/model/events-general.model';
import { SeriesGeneral } from 'src/app/shared/model/series-general.model';
import { StoriesGeneral } from 'src/app/shared/model/stories-general.model';
import { Thumbnail } from 'src/app/shared/model/thumbnail.model';
import { Url } from 'src/app/shared/model/url.model';

export interface Creator {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    fullName: string;
    modified: Date;
    resourceURI: string;
    imageUrl: string;
    urls: Array<Url>;
    thumbnail: Thumbnail;
    series: SeriesGeneral;
    stories: StoriesGeneral;
    comics: ComicsGeneral;
    events: EventsGeneral;
};