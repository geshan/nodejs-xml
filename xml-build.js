import { XMLBuilder } from 'fast-xml-parser';

const books = [
  {
    author: 'Gambardella, Matthew',
    title: "XML Developer's Guide",
    genre: 'Computer',
    price: 44.95,
    publish_date: '2000-10-01',
    description: 'An in-depth look at creating applications with XML.'
  },
  {
    author: 'Ralls, Kim',
    title: 'Midnight Rain',
    genre: 'Fantasy',
    price: 5.95,
    publish_date: '2000-12-16',
    description: 'A former architect battles corporate zombies, \n' +
      '      an evil sorceress, and her own childhood to become queen \n' +
      '      of the world.'
  }
];

const builder = new XMLBuilder({
  arrayNodeName: "book"
});
const xmlContent = `<?xml version="1.0"?>
<catalog>
  ${builder.build(books)}
</catalog>`

console.log(`xml: `, xmlContent.substring(0, 118));
