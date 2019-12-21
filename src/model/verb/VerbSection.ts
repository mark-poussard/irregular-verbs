import Verb from "./Verb";
import { pickRndFromArray } from "../Util";

export const NBR_SECTIONS = 10;

export default class VerbSection{
    private nbr : number;
    private verbs : Verb[];

    constructor(nbr : number, verbs : Verb[]){
        this.nbr = nbr;
        this.verbs = verbs;
    }

    getVerbs = () => this.verbs;
    getNbr = () => this.nbr;
    sizeGroup = (group : number) => this.verbs.filter(v => v.getGroup() === group).length;

    pick = (nbr : number) => {
        return pickRndFromArray(this.verbs, nbr);
    }

    toCsv = () => {
        return `Section ${this.nbr}\n` +  this.verbs.map(v => v.toCsv()).join("\n");
    }
}