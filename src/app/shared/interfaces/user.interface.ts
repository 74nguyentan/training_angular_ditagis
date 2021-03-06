import { ApplicationEntity } from './application.interface';
import { LayerEntity } from './layer.interface';

export interface UserEntity {
    userId?: string;
    username?: string;
    password?: string;
    statusId?: UserStatusEnum;
    displayName?: string;
    status?: UserStatusEntity;
    role?: RoleEntity;
    roleId?: string;
}

export interface UserStatusEntity {
    id: string;
    name: string;
}

export enum UserStatusEnum {
    Open = 'OPEN',
    Locked = 'LOCKED',
    Request = 'REQUEST',
    Expired = 'EXPIRED'
}

export interface RoleEntity {
    roleId?: string;
    roleName?: string;
    roleParentId?: string;
    roleParent?: RoleEntity;
    users?: UserEntity[];
    status?: RoleStatusEnum;
    applications?: ApplicationEntity[];
    layers?: RoleLayerEntity[];
}

export enum RoleStatusEnum {
    Open = 'OPEN', Lock = 'LOCK', Hide = 'HIDE'
}

export interface RoleLayerEntity {
    id?: string;
    roleId?: string;
    layerId?: string;
    layer?: LayerEntity;
    role?: LayerEntity;
    isView?: boolean;
    isCreate?: boolean;
    isEdit?: boolean;
    isDelete?: boolean;
    definition?: string;
}
