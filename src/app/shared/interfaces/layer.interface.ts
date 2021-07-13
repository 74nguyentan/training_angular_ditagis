import { RoleLayerEntity } from './user.interface';

export interface LayerEntity {
    layerId?: string;
    layerName?: string;
    datasetId?: string;
    dataset?: DatasetEntity;
    fields?: ColumnEntity[];
    geometryType?: string;
    hasVersion?: boolean;
    wkt?: string;
    url?:string;
    roles?: RoleLayerEntity[];
}

export interface DatasetEntity {
    datasetId?: string;
    datasetName?: string;
    layers?: LayerEntity[];
}
export interface ColumnEntity {
    name?: string;
    alias?: string;
    type?: ColumnTypeEnum;
    isNullable?: boolean;
    domainId?: string;
    domain?: CodedDomainEntity;
    layerId?: string;
    layer?: LayerEntity;
}

export enum ColumnTypeEnum {
    string = 'esriFieldTypeString',
    smallInteger = 'esriFieldTypeSmallInteger',
    integer = 'esriFieldTypeInteger',
    double = 'esriFieldTypeDouble',
    long = 'esriFieldTypeLong',
    date = 'esriFieldTypeDate',
    oid = 'esriFieldTypeOID',
    geometry = 'esriFieldTypeGeometry',
}

export interface CodedDomainEntity {
    id?: string;
    name?: string;
    type?: 'esriFieldTypeInteger' | 'esriFieldTypeSmallInteger' | 'esriFieldTypeString';
    codedValues?: CodedValueEntity[];
}

export interface CodedValueEntity {
    id?: string;
    code?: string;
    name?: string;
    domain?: CodedDomainEntity;
}
