(async()=>{
    const argv = require('minimist2')(process.argv.slice(2));
    // console.dir(argv);
    // console.dir(argv['f']);
    const folder=argv['f']===undefined?'sample':argv['f'];
    console.log(folder)


})()
