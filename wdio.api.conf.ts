// WebdriverIO konfigurācija API testiem (npm run test:api).
// Ņemam visu no wdio.conf.ts un nomainām tikai testu mapi.
// API testiem pārlūks nav vajadzīgs, tāpēc tas tiek palaists neredzami (headless).

import { config as base } from './wdio.conf'

export const config: WebdriverIO.Config = {
    ...base,
    specs: ['./test/api/**/*.spec.ts'],
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': { args: ['--headless=new'] }
    }]
}
