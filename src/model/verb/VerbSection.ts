import Verb from "./Verb";
import SeedRandom from "seed-random";
import VerbGroup, { MAX_GROUP } from "./VerbGroup";

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

    toCsv = () => {
        return `Section ${this.nbr}\n` +  this.verbs.map(v => v.toCsv()).join("\n");
    }

    static generate = (verbs : Verb[], seed : number) => {
        SeedRandom(seed.toString(), {global: true});
        const verbSections : VerbSection[] = [];
        const groups = VerbGroup.createGroups(verbs);
        const sectionSize = Math.floor(verbs.length / NBR_SECTIONS); // Remainder ?
        let sectionSizeRemainder = verbs.length % NBR_SECTIONS;
        for(let i=0; i<NBR_SECTIONS; i++){
            const sectionVerbs : Verb[] = [];
            const localSectionSize = (sectionSizeRemainder-- > 0)
                ? sectionSize + 1
                : sectionSize;
            let groupIdx = 0;
            const basePickAllowance = 3;
            while(sectionVerbs.length < localSectionSize){
                if(groupIdx >= MAX_GROUP) groupIdx=0;
                const nbrToPick = ((sectionVerbs.length + basePickAllowance) >= localSectionSize)
                    ? (localSectionSize-sectionVerbs.length)
                    : basePickAllowance;
                const picked = groups[groupIdx].pick(nbrToPick);
                sectionVerbs.push(...picked);
                groupIdx ++;
            }
            verbSections.push(new VerbSection(i+1, sectionVerbs));
        }
        SeedRandom.resetGlobal();
        return verbSections;
    }
}