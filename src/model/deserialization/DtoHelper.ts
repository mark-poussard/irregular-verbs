class DtoHelper{

    assertField = (dto : any, fieldName : string) => {
        if(!dto.hasOwnProperty(fieldName)){
            throw new Error(`Invalid dto did not have required field ${fieldName}`);
        }
    }

    assertOptionalField = (dto : any, fieldName : string, fieldType : FieldType) => {
        if(dto.hasOwnProperty(fieldName) && dto[fieldName] != null){
            this.assertType(dto, fieldName, fieldType);
        }
    }

    assertFieldAndType = (dto : any, fieldName : string, fieldType : FieldType) => {
        this.assertField(dto, fieldName);
        this.assertType(dto, fieldName, fieldType);
    }

    assertType = (dto : any, fieldName : string, fieldType : FieldType) => {
        const field = dto[fieldName];
        if(!this.isType(field, fieldType)){
            throw new Error(`Invalid dto had field of invalid type ${fieldName} expected ${fieldType}`);
        }
    }

    isType = (field : any, fieldType : FieldType) => {
        switch(fieldType){
            case FieldType.NUMBER:
                return typeof field === "number";
            case FieldType.STRING:
                return typeof field === "string";
            case FieldType.BOOLEAN:
                return typeof field === "boolean";
            case FieldType.OBJECT:
                return typeof field === "object";
            case FieldType.ARRAY:
                return Array.isArray(field);
        }
    }
}

export default new DtoHelper();

export enum FieldType{
    STRING,
    NUMBER,
    BOOLEAN,
    OBJECT,
    ARRAY
}