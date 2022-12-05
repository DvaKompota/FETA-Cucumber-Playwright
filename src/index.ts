import dotenv from 'dotenv'
import { env, getJsonFromFile } from './parseEnv'
import {
    GlobalConfig,
    HostsConfig,
    PagesConfig,
    PageElementMappings,
} from './global-config'
import { readdirSync } from 'fs'

dotenv.config({path: env('CONFIG_FILE')});

const hostsConfig: HostsConfig = getJsonFromFile(env('HOSTS_URLS_PATH'));
const pagesConfig: PagesConfig = getJsonFromFile(env('PAGE_URLS_PATH'));
const mappingFiles = readdirSync(`${process.cwd()}${env('PAGE_ELEMENTS_PATH')}`);

const pageElementMappings: PageElementMappings = mappingFiles.reduce(
    (pageElementConfigAcc, file) => {
        const key = file.replace('.json', '');
        const elementMappings = getJsonFromFile(`${env('PAGE_ELEMENTS_PATH')}${file}`);
        return {...pageElementConfigAcc, [key]: elementMappings};
    },
    {}
);

const worldParameters: GlobalConfig = {
    hostsConfig,
    pagesConfig,
    pageElementMappings,
}

const common = `./src/tests/**/features/**/*.feature \
                --require-module ts-node/register \
                --require src/tests/**/setup/**/*.ts \
                --require src/tests/**/step-definitions/**/**/*.ts \
                --world-parameters ${JSON.stringify(worldParameters)} \
                -f json:./reports/report.json \
                --format progress-bar`;

const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

export { dev, smoke, regression };
