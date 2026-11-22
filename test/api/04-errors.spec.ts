import { env } from '../support/env'

// API 4. uzdevums: negatīvie testi (kas notiek, ja kaut kas nav pareizi).
//
// a) GET /products/9999 (tāda produkta nav)  ->  statuss 404
// b) POST /auth/login ar nepareizu paroli     ->  statuss 400
//
// Padoms: login pieprasījums ir tāds pats kā 3. uzdevumā, tikai ar citu paroli

describe('DummyJSON: kļūdas', () => {
    it('neesošs produkts atgriež 404', async () => {
        // Tavs kods šeit

        // Izdzēs šo rindu, kad tests ir uzrakstīts:
        throw new Error('Uzdevums vēl nav izpildīts')
    })

    it('nepareiza parole atgriež 400', async () => {
        // Tavs kods šeit

        // Izdzēs šo rindu, kad tests ir uzrakstīts:
        throw new Error('Uzdevums vēl nav izpildīts')
    })
})
