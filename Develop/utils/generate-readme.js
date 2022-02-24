const fs = require('fs');

const writeFile = fileData => {
    return new Promise(( resolve, reject ) => {
        fs.writeFile('./dist/README.md', fileData, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Readme generated! Check dist folder'
            })
        })
    })

}

module.exports = writeFile;