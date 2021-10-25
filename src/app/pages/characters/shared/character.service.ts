import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends BaseResourceService {

  constructor(protected injector: Injector) {
    super('characters', injector);
  }
}
