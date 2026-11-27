import { env } from '../support/env'

// API 2. uzdevums: produktu meklēšana.
//
// Soļi:
//   1. Nosūti GET pieprasījumu uz  /products/search?q=phone
//   2. Pārbaudi, ka statuss ir 200
//   3. Pārbaudi, ka atrasts vismaz 1 produkts (body.total lielāks par 0)
//
// Padoms: skaties 01-get-product.spec.ts, tur ir gatavs piemērs
// Padoms: "lielāks par" pārbauda ar  expect(...).toBeGreaterThan(0)

describe('DummyJSON: meklēšana', () => {
    it('atrod produktus pēc vārda', async () => {
        const response = await fetch(`${env('API_URL')}/products/search?q=phone`)

        expect(response.status).toBe(200)

        const body: any = await response.json()
        expect(body.total).toBeGreaterThan(0)
    })
})
