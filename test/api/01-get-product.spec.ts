import { env } from '../support/env'

// API 1. piemērs (gatavs): nolasām vienu produktu.
//
// API testā pārlūks nav vajadzīgs. Mēs paši nosūtām HTTP pieprasījumu
// ar fetch() un pārbaudām atbildi: statusa kodu un JSON saturu.
//
// Pamēģini pārlūkā: https://dummyjson.com/products/1

describe('DummyJSON: produkts', () => {
    it('GET /products/1 atgriež produktu', async () => {
        // 1. Nosūtām pieprasījumu
        const response = await fetch(`${env('API_URL')}/products/1`)

        // 2. Pārbaudām statusa kodu (200 = OK)
        expect(response.status).toBe(200)

        // 3. Pārvēršam atbildi par JavaScript objektu un pārbaudām laukus
        const product: any = await response.json()
        expect(product.id).toBe(1)
        expect(product.title).toBe('Essence Mascara Lash Princess')
        expect(product.price).toBeGreaterThan(0)
    })
})
