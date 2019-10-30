/*
 * Copyrights granted by Meyhaneci
 *
 * Runs on NodeJS. No third party library installation required.
 * Executes every liquid.js tag matching {{static-name}} and puts the file in
 * views/ directory. Other liquid.js or Golang template tags not matching the
 * condition above may still be used. This JS is not for production use, see
 * src/ for production server code, written in Golang.
 *
 * Production view file names mustn't begin with underscore.
 * Statically-injected view file names must begin with an underscore.
 */

"use strict";
const fs = require("fs");
const path = require("path");

let raws = fs.readdirSync("./views-raw");
let cache = {}; //Reads and puts

for (let raw of raws) {
  if (raw.indexOf(".html") > -1) {
    if (raw.indexOf("_") == 0) save(raw);
  }
}

for (let raw of raws) {
  if (raw.indexOf(".html") > -1) {
    if (raw.indexOf("_") < 0) deploy(raw);
  }
}

function save(dirent) {
  try {
    cache[dirent.substring(1, dirent.indexOf("."))] = fs.readFileSync(path.resolve("./views-raw/" + dirent), "utf8");
  }
  catch (err) {
    console.error(`an error occured deploying ${dirent}:`, err);
  }
}

function deploy(dirent) {
  try {
	  console.log(dirent);
    let input = fs.readFileSync(path.resolve("./views-raw/" + dirent), "utf8");
    let keys = input.match(/{{static-([\w-]+)}}/g);
    if (keys) {
      for (let key of keys) {
        let keytrimmed = key.substring(key.indexOf("-") + 1, key.indexOf("}"));
        console.log("\t" + keytrimmed);
        input = input.replace(key, cache[keytrimmed]);
      }
		}
    fs.writeFileSync(path.resolve("./views/" + dirent), input, "utf8");
  }
  catch (err) {
    console.error(`an error occured deploying ${dirent}:`, err);
  }
}
