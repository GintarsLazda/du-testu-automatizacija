// WebdriverIO konfigurācija.
// Šeit norādām, KUR ir testi, KĀDĀ pārlūkā tos palaist un KĀ rādīt rezultātus.
// Pilna dokumentācija: https://webdriver.io/docs/configurationfile

import { existsSync } from 'node:fs'

// Ielādējam .env failu (lietotāji, paroles, adreses), ja tāds ir.
// Šīs vērtības testos nolasa ar env('NOSAUKUMS'), skat. test/support/env.ts
if (existsSync('.env')) {
    process.loadEnvFile('.env')
}

const headless = process.env.HEADLESS === 'true'

export const config: WebdriverIO.Config = {
    runner: 'local',

    // Kur meklēt testu failus
    specs: ['./test/specs/**/*.spec.ts'],

    // Cik pārlūkus palaist vienlaikus. 1 = testi iet pa vienam, vieglāk sekot līdzi.
    maxInstances: 1,

    // Kurā pārlūkā testēt. WebdriverIO pats lejupielādē vajadzīgo draiveri (ChromeDriver).
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            // HEADLESS=true npm test  ->  pārlūks strādā "neredzami" (piem., CI serverī)
            args: headless ? ['--headless=new', '--window-size=1280,900'] : ['--window-size=1280,900']
        }
    }],

    // Cik daudz informācijas rādīt terminālī.
    // Nomaini uz 'info', lai redzētu katru WebDriver komandu, ko WebdriverIO sūta draiverim.
    logLevel: 'warn',

    // Cik ilgi (ms) gaidīt elementus un pārbaudes (expect), pirms tests krīt
    waitforTimeout: 10000,

    // Testu struktūra: describe / it
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // Kā rādīt rezultātus terminālī
    reporters: ['spec']
}
