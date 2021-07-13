export interface ApplicationEntity {
    applicationId?: string;
    applicationName?: string;
    isEnabled?: boolean;
    applicationGroupId?: string;
    applicationGroup?: ApplicationGroupEntity;
    environmentId?: ApplicationEnvironmentEnum;
    config?: string;
}

export interface ApplicationGroupEntity {
    applicationGroupId?: string;
    applicationGroupName?: string;
     parentId?: string;
    parent?: ApplicationGroupEntity;
    childs?: ApplicationGroupEntity[];
    applications?: ApplicationEntity[];
}

export enum ApplicationEnvironmentEnum {
    Desktop = 'D', Web = 'W', Mobile = 'M'
}
