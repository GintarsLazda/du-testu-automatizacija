import { env } from '../support/env'

// API 4. uzdevums: negatīvie testi (kas notiek, ja kaut kas nav pareizi).
//
// a) GET /products/9999 (tāda produkta nav)  ->  statuss 404
// b) POST /auth/login ar nepareizu paroli     ->  statuss 400
//
// Padoms: login pieprasījums ir tāds pats kā 3. uzdevumā, tikai ar citu paroli

describe('DummyJSON: kļūdas', () => {
    it('neesošs produkts atgriež 404', async () => {
        const response = await fetch(`${env('API_URL')}/products/9999`)

        expect(response.status).toBe(404)
    })

    it('nepareiza parole atgriež 400', async () => {
        const response = await fetch(`${env('API_URL')}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'emilys', password: 'wrongpassword' })
        })

        expect(response.status).toBe(400)
    })
})
