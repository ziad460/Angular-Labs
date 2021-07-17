export enum discountOffers
{
    noDiscount = "No Discount",
    littleDiscount = "10% Discount",
    bigDiscount = "15% Discount"
}
export interface IProduct 
{
    ID: number;
    name:string ;
    Quantity:number;
    Price:number;
    image:string;
}
export interface ICategory
{
    ID: number;
    name:string ;
}
export interface IUser
{
    name:string;
    username:string;
    email:string;
}
export interface IPost
{
    id:number;
    title:string;
    body:string;
}

export interface IComments
{
    postId:number;
    name:string;
    email:string;
    body:string;
}
export interface ICar
{
    name:string;
    color:string;
    speed:number;
    type:string;
}
export class User {
    constructor(
        public userName: string,
        public Email: string,
        public Password: string,
        public confirmPassword: string,
        public site: string
    ) { }
}