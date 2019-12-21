import DtoHelper, { FieldType } from "../deserialization/DtoHelper";

export default class Verb{
    private group : number;
    private verbalBase : string;
    private simplePast : string;
    private pastParticiple : string;
    private meaning : string;

    constructor(group : number, verbalBase : string, simplePast : string, pastParticiple : string, meaning : string){
        this.group = group;
        this.verbalBase = verbalBase;
        this.simplePast = simplePast;
        this.pastParticiple = pastParticiple;
        this.meaning = meaning;
    }

    getGroup = () => this.group;
    getVerbalBase = () => this.verbalBase;
    getSimplePast = () => this.simplePast;
    getPastParticiple = () => this.pastParticiple;
    getMeaning = () => this.meaning;

    static fromDto = (dto : any) => {
        DtoHelper.assertFieldAndType(dto, "group", FieldType.STRING);
        const group = parseInt(dto.group);

        DtoHelper.assertFieldAndType(dto, "verbalBase", FieldType.STRING);
        const verbalBase = dto.verbalBase;

        DtoHelper.assertFieldAndType(dto, "simplePast", FieldType.STRING);
        const simplePast = dto.simplePast;

        DtoHelper.assertFieldAndType(dto, "pastParticiple", FieldType.STRING);
        const pastParticiple = dto.pastParticiple;

        DtoHelper.assertFieldAndType(dto, "meaning", FieldType.STRING);
        const meaning = dto.meaning;

        return new Verb(group, verbalBase, simplePast, pastParticiple, meaning);
    }
}