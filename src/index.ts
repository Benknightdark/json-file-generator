#!/usr/bin/env node

import { build } from "./helpers/generator";


(async () => {

   const chalk = require('chalk');
   const clear = require('clear');
   const figlet = require('figlet');
   const path = require('path');
   const program = require('commander');
   clear();
   console.log(
      chalk.red(
         figlet.textSync('JSONFile-Generator-cli', { horizontalLayout: 'full' })
      )
   );
   program
      .version('0.0.1')
      .description("An CLI for creating JSON File")
      .option('-f', 'Assing your JSON file folder')
      .parse(process.argv);


   if (!process.argv.slice(2).length) {
      program.outputHelp();
      return;
   }
   const dirName = __dirname;
   console.log(dirName)
   const argv = require('minimist2')(process.argv.slice(2));
   await build(dirName, argv['f']);
   return;

})()
