import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { geoJSON, Polygon, Layer, Control } from 'leaflet';
import { Feature } from 'geojson';
import { CongTrinhXayDungService } from '@shared/services/cong-trinh-xay-dung/cong-trinh-xay-dung.service';
import { DynamicMapLayer } from 'esri-leaflet';
import { DlMap, NestCrudLeafletLayer } from 'ditagis-leaflet';
import { ThuaDatEntity } from '@shared/services/thua-dat/thua-dat.interface';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { ThuaDatService } from '@shared/services/thua-dat/thua-dat.service';

const URL_HienTrang = [
  {
    name: 'Giao thông',
    url: 'http://171.244.32.245/arcgis/rest/services/HienTrang/HT_GT/MapServer',
  },
  {
    name: 'Bảo vệ môi trường',
    url:
      'http://171.244.32.245/arcgis/rest/services/HienTrang/HT_BVMT/MapServer',
  },
  {
    name: 'Cấp điện',
    url:
      'http://171.244.32.245/arcgis/rest/services/HienTrang/HT_C%C4%90/MapServer',
  },
  {
    name: 'Chiếu sáng',
    url: 'http://171.244.32.245/arcgis/rest/services/HienTrang/HT_CS/MapServer',
  },
  {
    name: 'Cấp nước',
    url: 'http://171.244.32.245/arcgis/rest/services/HienTrang/HT_CN/MapServer',
  },
  {
    name: 'Thoát nước',
    url: 'http://171.244.32.245/arcgis/rest/services/HienTrang/HT_TN/MapServer',
  },
  {
    name: 'Cây xanh',
    url: 'http://171.244.32.245/arcgis/rest/services/HienTrang/HT_CX/MapServer',
  },
  {
    name: 'Viễn thông',
    url: 'http://171.244.32.245/arcgis/rest/services/HienTrang/HT_VT/MapServer',
  }
];
@Component({
  selector: 'ga-ban-do',
  templateUrl: './ban-do.component.html',
  styleUrls: ['./ban-do.component.scss']
})

export class BanDoComponent implements OnInit, AfterViewInit {
  @ViewChild('viewDiv', { static: true }) viewDiv: ElementRef<HTMLDivElement>;
  @Input() viewDivStyle;
  @Input() maCTXD: string;
  private map: DlMap;
  private thuadatImageLayer: NestCrudLeafletLayer<ThuaDatEntity>;
  loaded = false;
  constructor(
    private congTrinhXayDungService: CongTrinhXayDungService,
    private thuaDatService: ThuaDatService
  ) { }

  ngOnInit() {
    if (!this.maCTXD) {
      throw new Error('Không xác định được maCTCPXD');
    }
  }
  async ngAfterViewInit() {
    this.map = new DlMap(this.viewDiv.nativeElement, {});
    this.map.setView(
      {
        lat: 11.132015,
        lng: 106.701767,
      },
      10
    );

    this.loaded = true;
    const ctrlLayers: { [key: string]: Layer } = {};
    URL_HienTrang.forEach((item) => {
      let layer = new DynamicMapLayer({
        url: item.url,
        minZoom: 15,
      }).addTo(this.map);
      ctrlLayers[item.name] = layer;
    });
    new Control.Layers(null, ctrlLayers).addTo(this.map).setPosition('topleft');

    const value = await this.congTrinhXayDungService
    .getOne(this.maCTXD, {
      fields: ['shape'],
      outSR: { wkid: 4326 },
      fGeo: 'geojson',
    })
    .toPromise();

    if (value) {
      const polygon = geoJSON({
        type: 'Feature',
        geometry: value.shape,
        properties: {},
      } as Feature)
      
      polygon.addTo(this.map);
      this.map.fitBounds(polygon.getBounds());
    }
    this.thuadatImageLayer = new NestCrudLeafletLayer({
      service: this.thuaDatService,
      primaryKey: 'OBJECTID',
      minZoom: 19,
      maxZoom: 23,
      builder: (qb: RequestQueryBuilder) =>
        qb
          .setLimit(100)
          .select([
            'OBJECTID',
            'SoThua',
            'SoTo',
            'MaPhuongXa',
            'MaQuanHuyen',
            'shape',
          ] as Array<keyof ThuaDatEntity>),
      beforeAddFeature: ({ graphic }) => {
        graphic = graphic as Polygon<ThuaDatEntity>;
        graphic.setStyle({ color: 'white', fill: false });
        // graphic.on('click', () => {
        //   this.clickThua.emit(graphic.feature.properties);
        // });
      },
    }).addTo(this.map)
  }
}
