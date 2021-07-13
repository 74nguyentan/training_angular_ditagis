import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GeometryService {
  constructor(private httpClient: HttpClient) {}
  addressToCoordinates(params: {
    searchText: string;
  }) 
  {
    const { searchText } = params;
    return this.httpClient
      .get<GeoJSON.FeatureCollection>(
        `http://gisxd.binhduong.gov.vn:88/services/geometry/places/search`,
        {
          params: new HttpParams({
            fromObject: {
              q: encodeURI(searchText + ' bình dương'),
            },
          }),
        }
      )
  }

}
