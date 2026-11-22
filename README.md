# Testu automatizācija ar WebdriverIO + TypeScript

Prakses projekts Daugavpils Universitātes testu automatizācijas kursam.
Testējam demo internetveikalu [saucedemo.com](https://www.saucedemo.com), kas izveidots tieši testu automatizācijas mācībām.

## Kas jāuzinstalē

- **Node.js** — jaunākā LTS versija no [nodejs.org](https://nodejs.org) (WebdriverIO 10 prasa Node.js 22.23.4+, 24.22.1+ vai 26.12.1+)
- **Git** — [git-scm.com](https://git-scm.com)
- **VS Code** — [code.visualstudio.com](https://code.visualstudio.com)
- **Google Chrome**

Pārbaudi terminālī:

```bash
node -v
npm -v
git --version
```

## Sagatavošanās

```bash
git clone https://github.com/GintarsLazda/du-testu-automatizacija.git
cd du-testu-automatizacija
npm install
cp .env.example .env        # Windows (cmd): copy .env.example .env
npm test
```

`npm install` vienreiz lejupielādē visus rīkus no `package.json` mapē `node_modules`.
`.env` failā glabājas lietotāji, paroles un API adrese. Tas netiek likts Git.

Pirmajā palaišanā WebdriverIO pats lejupielādē ChromeDriver, tāpēc vajag internetu.

## Komandas

| Komanda | Ko dara |
|---|---|
| `npm test` | Palaiž visus UI (pārlūka) testus |
| `npm run test:login` | Palaiž tikai login testu |
| `npm run test:api` | Palaiž API testus (DummyJSON) |
| `npx wdio run ./wdio.conf.ts --spec ./test/specs/05-remove-from-cart.spec.ts` | Palaiž vienu konkrētu failu |
| `npm run typecheck` | Pārbauda TypeScript kļūdas, nepalaižot testus |

## Projekta struktūra

```
du-testu-automatizacija/
├── test/
│   ├── specs/                         ← UI testi (saucedemo.com)
│   │   ├── 01-login.spec.ts           ← gatavs tests
│   │   ├── 02-wrong-password.spec.ts  ← 2. uzdevums
│   │   ├── 03-cart.spec.ts            ← 3. uzdevums
│   │   ├── 04-page-object.spec.ts     ← gatavs piemērs ar Page Object un .env
│   │   ├── 05-remove-from-cart.spec.ts
│   │   ├── 06-sort.spec.ts
│   │   ├── 07-checkout.spec.ts
│   │   ├── 08-logout.spec.ts
│   │   └── 09-locked-user.spec.ts
│   ├── api/                           ← API testi (dummyjson.com)
│   │   ├── 01-get-product.spec.ts     ← gatavs piemērs
│   │   ├── 02-search.spec.ts
│   │   ├── 03-login.spec.ts
│   │   ├── 04-errors.spec.ts
│   │   └── 05-add-product.spec.ts
│   ├── pageobjects/                   ← lapu klases (Page Object Model)
│   └── support/env.ts                 ← nolasa vērtības no .env
├── .env.example                       ← paraugs .env failam
├── wdio.conf.ts                       ← WebdriverIO konfigurācija (UI testi)
├── wdio.api.conf.ts                   ← konfigurācija API testiem
├── tsconfig.json                  ← TypeScript iestatījumi
└── package.json                   ← atkarības un komandas
```

## Uzdevumi

1. **Palaid gatavo login testu** (`npm test`) un apskaties rezultātu terminālī.
2. **Login ar nepareizu paroli** — uzraksti testu failā `02-wrong-password.spec.ts`.
3. **Grozs** — pievieno preci grozam un pārbaudi, ka grozā ir 1 prece (`03-cart.spec.ts`).

### 2. lekcija: Page Object un vairāk scenāriju

Apskati gatavo piemēru `04-page-object.spec.ts` un lapu klases mapē `test/pageobjects/`. Tālāk uzdevumos izmanto tās:

5. **Izņem preci no groza** (`05-remove-from-cart.spec.ts`)
6. **Kārtošana pēc cenas** (`06-sort.spec.ts`)
7. **Pirkums no sākuma līdz beigām** (`07-checkout.spec.ts`)
8. **Izlogošanās** (`08-logout.spec.ts`)
9. **Bloķēts lietotājs** (`09-locked-user.spec.ts`)

### 2. lekcija: API testi

API testos pārlūks nav vajadzīgs: ar `fetch()` nosūtām HTTP pieprasījumu uz [dummyjson.com](https://dummyjson.com/docs) un pārbaudām statusa kodu un JSON atbildi. Palaišana: `npm run test:api`.

1. Gatavs piemērs: `01-get-product.spec.ts`
2. **Meklēšana** (`02-search.spec.ts`)
3. **Login un tokens** (`03-login.spec.ts`)
4. **Negatīvie testi: 404 un 400** (`04-errors.spec.ts`)
5. **Jauns produkts ar POST** (`05-add-product.spec.ts`)

Katrā uzdevuma failā ir soļi un padomi. Kamēr uzdevums nav izpildīts, tests apzināti krīt ar kļūdu „Uzdevums vēl nav izpildīts”.

Risinājumi ir zarā `risinajumi`:

```bash
git checkout risinajumi
```

## Lietotāji saucedemo.com

| Lietotājs | Parole | Kas notiek |
|---|---|---|
| `standard_user` | `secret_sauce` | Viss strādā normāli |
| `locked_out_user` | `secret_sauce` | Lietotājs ir bloķēts |

## Noderīgi padomi

- **Redzēt, ko WebdriverIO sūta pārlūkam:** `wdio.conf.ts` nomaini `logLevel: 'warn'` uz `logLevel: 'info'`.
- **Palaist bez redzama pārlūka:** `HEADLESS=true npm test` (macOS/Linux).
- **Windows PowerShell kļūda „running scripts is disabled”:** izmanto `cmd` vai izpildi
  `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.
- **Elementu selektori:** pārlūkā labais klikšķis → *Inspect* (F12).

## Saites

- [WebdriverIO dokumentācija](https://webdriver.io/docs/gettingstarted)
- [expect-webdriverio pārbaudes](https://webdriver.io/docs/api/expect-webdriverio)
