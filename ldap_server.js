var ldap = require('ldapjs');

var server = ldap.createServer();

server.search('o=example', function(req, res, next) {
  var obj = {
    dn: req.dn.toString(),
    attributes: {
      objectclass: ['organization', 'top'],
      o: 'example'
    }
  };

  // console.log('req.filter', req.filter);
  // console.log('obj.attributes', obj.attributes);

  if (req.filter.matches(obj.attributes)) {
    console.log('in req.filter.matches');
    res.send(obj);
  }

  console.log('before res.end');
  res.end();
});

server.listen(1389, function() {
  console.log('LDAP server listening at %s', server.url);
});
