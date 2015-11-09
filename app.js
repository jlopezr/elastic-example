var elasticsearch = require('elasticsearch');
 
var connectionString = 'http://localhost:9200';
 
var client = new elasticsearch.Client({
    host: connectionString
});

/*
client.index({
  index: 'sample',
  type: 'document',
  id: '1',
  body: {
          name: 'Reliability', 
          text: 'Reliability is improved if multiple redundant sites are used, which makes well-designed cloud computing suitable for business continuity.'
  }
}, function (error, response) {
  console.log(response);
});
*/

client.search({
        index: 'sample',
        type: 'document',
        body: {
            query: {
                query_string:{
                   query:"Reliability"
                }
            }
        }
    }).then(function (resp) {
        console.dir(resp);
        console.log(resp.hits.hits);
    }, function (err) {
        console.log(err.message);
    });
