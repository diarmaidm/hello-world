var ldap = require('ldapjs');
// var assert = require('assert');

  // url: 'ldap://127.0.0.1:1389'
var client = ldap.createClient({
  url: 'ldap://0.0.0.0:1389'
});

// client.bind('cn=root', 'secret', function(err) {
//   console.log('in bind, err',err);
//   // assert.ifError(err);
// });

var opts = {
  filter: '(&(objectclass=*)(o=example))',
  scope: 'sub',
  attributes: ['dn', 'sn', 'cn']
};
// var opts = {
//   filter: '(&(l=Seattle)(email=*@foo.com))',
//   scope: 'sub',
//   attributes: ['dn', 'sn', 'cn']
// };

client.search('o=example', opts, function(err, res) {
  console.log('\n..... in search, err',err);
  // assert.ifError(err);

  res.on('searchEntry', function(entry) {
    console.log('\n.....in searchEntry. entry: ' + JSON.stringify(entry.object));
  });
  res.on('searchReference', function(referral) {
    console.log('\n.....in searchReference. referral: ' + referral.uris.join());
  });
  res.on('error', function(err) {
    console.error('\n.....in error: ' + err.message);
  });
  res.on('end', function(result) {
    console.log('\n.....in end status: ' + result.status);
  });
});