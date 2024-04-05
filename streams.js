const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt'), { encoding: 'utf8'};
const writeStream = fs.creatWriteStream('./docs/blog4.txt');

readStream.pipe(writeStream);