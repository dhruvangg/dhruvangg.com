### Projection
Projection means selecting only the necessary data rather than selecting whole of the data of a document. If a document has 5 fields and you need to show only 3, then select only 3 fields from them.
```
const moviesByCountry = movies.find({
    countries: { $all: ["USA", "INDIA"] }
}, {
    projection: { title: 1 }
})
```
### Cursor Methods and Aggregation Equivalents

|Cursor Methods|Aggregation Equivalents|
| ---- | ---- |
|.sort()|$sort|
|.limit()|$limit|
|.skip()|$skip|

### Aggregation

Aggregation is a pipeline which are composed of one or more stages, Stages use one or more expressions, expressions are functions. 

- `{ "$add": ["$a", "$b"] }`
