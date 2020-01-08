import * as fs from 'fs'
import * as path from 'path'

(async () => {
    try {
        const argv = require('minimist2')(process.argv.slice(2));
        // console.dir(argv);
        // console.dir(argv['f']);
        const folder = argv['f'] === undefined ? 'sample' : argv['f'];
        const masterJsonString = await fs.readFileSync(path.resolve(__dirname, `${folder}/master.json`), 'UTF-8');
        const configJsonString = await fs.readFileSync(path.resolve(__dirname, `${folder}/config.json`), 'UTF-8');
        const masterData = JSON.parse(masterJsonString);
        const configData = JSON.parse(configJsonString);
        const configObjects = Object.keys(configData);
        const outPutfilePath=path.resolve(__dirname, `${folder}/Output/`);
        !fs.existsSync(outPutfilePath) && fs.mkdirSync(outPutfilePath);
        configObjects.map(async b =>  {
            console.log(b)
            console.log("---------------------------")
            const nData = {...masterData,...configData[b]}
            console.log(nData)
            console.log("---------------------------")
            await fs.writeFileSync(`${outPutfilePath}/${b}.json`,new Buffer(JSON.stringify(nData, null, '\t')));
        })
        return;
    } catch (error) {
        throw error;
    }


})()
