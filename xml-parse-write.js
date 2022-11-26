import { XMLParser, XMLBuilder, XMLValidator} from 'fast-xml-parser';
import { readFileSync } from 'fs';

//xml file from https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms762271(v=vs.85)
const xmlFile = readFileSync(`${process.cwd()}/xml/books.xml`, 'utf8');

const result = XMLValidator.validate(xmlFile, {
  allowBooleanAttributes: true
});

console.log(`result: `, result);

const parser = new XMLParser();
let json = parser.parse(xmlFile);

console.log(`First book: `, json.catalog.book[0]);

const builder = new XMLBuilder();
const xmlContent = builder.build(json);

console.log(`xml: `, xmlContent.substring(0, 106));
