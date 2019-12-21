import VerbSection, { NBR_SECTIONS } from "./VerbSection";
import SeedRandom from "seed-random";
import VerbGroup, { MAX_GROUP } from "./VerbGroup";
import Verb from "./Verb";
import Test from "./Test";

export default class VerbSections{
    private sections : VerbSection[];

    constructor(sections : VerbSection[]){
        this.sections = sections;
    }

    getSections = () => this.sections;

    createTestForSection = (idx : number, seed : number) => {
        SeedRandom(seed.toString(), {global: true});
        const test = Test.create(this.sections[idx], ...this.sections.slice(0, idx));
        SeedRandom.resetGlobal();
        return test;
    }

    toCsv = () => {
        return this.sections.map(s => s.toCsv()).join("\n");
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
        return new VerbSections(verbSections);
    }
}