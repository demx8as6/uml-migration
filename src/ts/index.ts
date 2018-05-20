/*
 * (C) Copyright 2018 highstreet technologies (http://highstreet-technologies.com) and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Contributors:
 *     Martin Skorupski [martin.skorupski@highstreet-technologies.com]
 */

// Global interface definitions
declare global {
    interface String {
        extension(): string;
    }
}

// Global interface implementations 
String.prototype.extension = function (): string {
    const strings: string[] = this.split('.');
    if (strings.length > 0) {
        return strings[strings.length - 1];
    }
    return '';
};

// Start application
import fs = require('fs');

const inputFolder = './input';
const targetFolder = './target';

fs.readdirSync(inputFolder).forEach(file => {
    if (file.extension() === 'uml') {

    } else {
        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder);
        }
        fs.copyFileSync([inputFolder, file].join('/'), [targetFolder, file].join('/'))
    }
})

console.info('Finished! Please check folde:r', targetFolder);