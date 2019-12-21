import Verb from "./Verb";
import VerbSection from "./VerbSection";
import { pickRndFromArray } from "../Util";

const MAIN_TEST_QTY = 15;
const SECONDARY_TEST_QTY = 5;
const SECONDARY_TEST_LIMIT = 15;

export default class Test{
    private verbs : Verb[];

    constructor(verbs : Verb[]){
        this.verbs = verbs;
    }

    getVerbs = () => this.verbs;

    toCsv = () => {
        return this.verbs.map(v => v.toCsv()).join("\n");
    }

    static create = (mainSection : VerbSection, ...sections : VerbSection[]) => {
        const verbs = mainSection.pick(MAIN_TEST_QTY);
        const verbPool : Verb[] = [];
        for(let section of sections){
            verbPool.push(...section.getVerbs());
        }
        let qtyToPickFromPool = sections.length * SECONDARY_TEST_QTY;
        if(qtyToPickFromPool > SECONDARY_TEST_LIMIT) qtyToPickFromPool = SECONDARY_TEST_LIMIT;
        verbs.push(...pickRndFromArray(verbPool, qtyToPickFromPool));
        return new Test(verbs);
    }
}