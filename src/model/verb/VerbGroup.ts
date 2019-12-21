import Verb from './Verb';
import { pickRndFromArray } from '../Util';

export const MAX_GROUP = 5;

export default class VerbGroup{
    private group : number;
    private verbs : Verb[];

    constructor(group : number, verbs : Verb[]){
        this.group = group;
        this.verbs = verbs;
    }

    getGroup = () => this.group;
    getVerbs = () => this.verbs;

    pick = (nbr : number) => {
        const picked : Verb[] = [];
        for(let i=0; i<nbr; i++){
            if(this.verbs.length === 0) break;
            const rndIdx = Math.floor(Math.random() * this.verbs.length);
            picked.push(this.verbs[rndIdx]);
            this.verbs.splice(rndIdx, 1);
        }
        return picked;
    }

    static createGroup = (group : number, verbs : Verb[]) => {
        const groupVerbs = verbs.filter(v => v.getGroup() === group);
        return new VerbGroup(group, groupVerbs);
    }

    static createGroups = (verbs : Verb[]) => {
        const groups : VerbGroup[] = []
        for(let i=0; i<MAX_GROUP; i++){
            groups.push(VerbGroup.createGroup(i+1, verbs));
        }
        return groups;
    }
}