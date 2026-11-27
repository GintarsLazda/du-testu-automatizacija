import { env } from '../support/env'

// API 3. uzdevums: login un tokens.
//
// Soļi:
//   1. Nosūti POST pieprasījumu uz /auth/login ar JSON:
//        { "username": "emilys", "password": "emilyspass" }
//   2. Pārbaudi, ka statuss ir 200 un atbildē ir accessToken
//   3. Nosūti GET uz /auth/me ar galveni  Authorization: Bearer <accessToken>
//   4. Pārbaudi, ka atbildē username ir "emilys"
//
// Padoms: POST ar JSON izskatās tā:
//   await fetch(url, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username: ..., password: ... })
//   })
// Padoms: vai vērtība eksistē, pārbauda ar  expect(...).toBeDefined()

describe('DummyJSON: login', () => {
    it('ar tokenu var nolasīt savu profilu', async () => {
        const loginResponse = await fetch(`${env('API_URL')}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'emilys', password: 'emilyspass' })
        })

        expect(loginResponse.status).toBe(200)

        const loginBody: any = await loginResponse.json()
        expect(loginBody.accessToken).toBeDefined()

        const meResponse = await fetch(`${env('API_URL')}/auth/me`, {
            headers: { Authorization: `Bearer ${loginBody.accessToken}` }
        })

        expect(meResponse.status).toBe(200)

        const meBody: any = await meResponse.json()
        expect(meBody.username).toBe('emilys')
    })
})
