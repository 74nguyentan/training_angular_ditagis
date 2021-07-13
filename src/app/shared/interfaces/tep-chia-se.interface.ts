export interface QuanLyTepEntity {
    id?: string;
    webContentLink?: string;
    name?: string;
    slugName?: string;
    thumbnailLink?: string;
    mimeType?: string;
    iconLink?: string;
    size?: number;
    createTime?: Date;
    modifiedTime?: Date;
    ownerId?: string;
    canShare?: boolean;
    shared?: ChiaSeEntity;
    canDelete?: boolean;
    canEdit?: boolean;
    canCreateSubFolder?: boolean;
    parentId?: string;
    path?: string;
    webViewLink?: string;
}
export interface ChiaSeEntity {
    id?: string;
    createDate?: Date;
    modifyDate?: Date;
    deleteDate?: Date;
    password?: string;
    isEveryone?: boolean;
    ownerId?: string;
    owner?: UserEntity;
    fileId?: string;
    file?: QuanLyTepEntity;
    isEdit?: boolean;
    views?: number;
    expires?: Date;
}
export interface UserEntity {
    userId?: string ;
    username?: string ;
    displayName?: string ;
}
export enum ThuMucMacDinhEnum {
    YeuThich = '1',
    ThuMucCuaToi = '2',
    DuocChiaSe = '3',
}
export enum FileTypeEnum {
    VanBan = 'vanBan',
    BanVe = 'banVe',
    HinhAnh = 'hinhAnh',
}
