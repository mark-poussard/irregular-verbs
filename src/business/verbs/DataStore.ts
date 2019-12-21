import CsvDeserializer from "../deserialization/CsvDeserializer"
import rawVerbsData from "./RawVerbsData"
import Verb from "../../model/verb/Verb"

class DataStore{

    getVerbs = () => {
        return CsvDeserializer.deserialize(rawVerbsData)
            .then(dtoArray => dtoArray.map(Verb.fromDto));
    }
}
export default new DataStore();