import * as fs from 'fs'
import * as path from 'path'
export const build=async (dirName:string,fileFolder:string)=>{
    try {
        const folder =fileFolder; //argv['f'] === undefined ? 'sample' : fileFolder;
        const masterJsonString = await fs.readFileSync(path.resolve(dirName, `${folder}/master.json`), 'UTF-8');
        const configJsonString = await fs.readFileSync(path.resolve(dirName, `${folder}/config.json`), 'UTF-8');
        const masterData = JSON.parse(masterJsonString);
        const configData = JSON.parse(configJsonString);
        const configObjects = Object.keys(configData);
        const outPutfilePath=path.resolve(dirName, `${folder}/Output/`);
        !fs.existsSync(outPutfilePath) && fs.mkdirSync(outPutfilePath);
        configObjects.map(async b =>  {
            console.log(b)
            console.log("---------------------------")
            const nData = {...masterData,...configData[b]}
            console.log(nData)
            console.log("---------------------------")
            await fs.writeFileSync(`${outPutfilePath}/${b}.json`, Buffer.from(JSON.stringify(nData, null, '\t')));
        })
        return;
    } catch (error) {
        throw error;
    }
}