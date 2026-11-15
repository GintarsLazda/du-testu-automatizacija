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
git clone <repozitorija saite>
cd du-testu-automatizacija
npm install
npm test
```

Pirmajā palaišanā WebdriverIO pats lejupielādē ChromeDriver, tāpēc vajag internetu.

## Komandas

| Komanda | Ko dara |
|---|---|
| `npm test` | Palaiž visus testus |
| `npm run test:login` | Palaiž tikai login testu |
| `npm run typecheck` | Pārbauda TypeScript kļūdas, nepalaižot testus |

## Projekta struktūra

```
du-testu-automatizacija/
├── test/specs/
│   ├── 01-login.spec.ts           ← gatavs tests
│   ├── 02-wrong-password.spec.ts  ← 2. uzdevums
│   └── 03-cart.spec.ts            ← 3. uzdevums
├── wdio.conf.ts                   ← WebdriverIO konfigurācija
├── tsconfig.json                  ← TypeScript iestatījumi
└── package.json                   ← atkarības un komandas
```

## Uzdevumi

1. **Palaid gatavo login testu** (`npm test`) un apskaties rezultātu terminālī.
2. **Login ar nepareizu paroli** — uzraksti testu failā `02-wrong-password.spec.ts`.
3. **Grozs** — pievieno preci grozam un pārbaudi, ka grozā ir 1 prece (`03-cart.spec.ts`).

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
