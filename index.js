var conventionalChangelog = require('conventional-changelog');
var config = require('conventional-changelog-cmyr-config');
conventionalChangelog({
    config,
    previousTag: 'v0.2.1',
    currentTag: 'v0.2.2',
    version: 'v0.2.2',
    outputUnreleased: true
}).pipe(process.stdout);