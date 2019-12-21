const CSV_DELIMITER = ";";

class CsvDeserializer{

    deserialize = (data : string) => {
        return new Promise<any[]>((resolve, reject) => {
            const entries = data.split("\n").map(s => s.trim()).filter(s => s.length > 0);
            let header : string[] = [];
            let headerInit = false;
            const deserializedArray = [];
            for(const entry of entries){
                const values = entry.split(CSV_DELIMITER).map(s => s.trim());
                if(!headerInit){
                    header = values;
                    headerInit = true;
                }
                else{
                    const deserializedValue : {[field : string] : string} = {};
                    for(let i=0; i<values.length;i++){
                        deserializedValue[header[i]] = values[i];
                    }
                    deserializedArray.push(deserializedValue);
                }
            }
            resolve(deserializedArray);
        });
    }

}
export default new CsvDeserializer();