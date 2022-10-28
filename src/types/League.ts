import {IClub} from "./Club";

export default interface ILeague{

    name: string; 
    keyword: string; 
    logo: string; 
    clubs: IClub[];

}