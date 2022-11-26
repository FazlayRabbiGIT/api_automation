const newman = require('newman');
newman.run({
collection: require('./Collection/Dmoney_GItB5.postman_collection.json'), // pointing to local JSON file.

iterationCount: 1,
reporters: 'htmlextra',
reporter: {
htmlextra: {
export: './Reports/report.html', 
}
}
}, function (err) {
if (err) { throw err; }
console.log('collection run complete!');
});