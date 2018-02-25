const fs            = require('fs');
const path          = require('path');


function Builder(filepath){
    this.basename = path.basename(filepath);
}

Builder.prototype = {
    constructor: Builder,

    /*
    * recursive function that builds an object of controllers out of files in this and all subdirectories
    */
    build: (directory) => {
        let temp = {}; 
        fs.readdirSync(directory)
            .filter(file => {
                stat = fs.statSync(path.join(directory, file));
                return ((file.slice(-3) === '.js') && (file !== this.basename)) || stat.isDirectory();
            })
            .forEach(item => {
                // if item is a file, require
                if(item.indexOf('.') !== -1)
                    temp[item.slice(0,-3)] = require(path.join(directory, item));
                else
                    temp[item] = build(path.join(directory, item));
            });
            return temp;
    }
}

module.exports = Builder;



