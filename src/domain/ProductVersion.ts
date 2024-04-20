export interface IProductVersion {
    id : number;
    product : IProduct;
    version : string;
    releaseDate : Date;
    description : string;
    team : string;
    branch : string;
    releaseLocation : IReleaseLocation;
    active : boolean;
    row : number;
}

export interface IProduct {
   id : number
   name : string
   description : string
}

export interface ITableRow {
    id : number
    date : Date
    branch : string
    productVersions : IProductVersion[]
    releaseLocation : IReleaseLocation
}

export enum IReleaseLocation {
    COLLAUDO,
    SDM,
    PREESERCIZIO,
    PRODUZIONE
}