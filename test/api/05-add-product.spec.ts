import { env } from '../support/env'

// API 5. uzdevums: pievieno jaunu produktu.
//
// Soļi:
//   1. Nosūti POST uz /products/add ar JSON:  { "title": "DU testa produkts", "price": 10 }
//   2. Pārbaudi, ka pieprasījums izdevās (response.ok ir true)
//   3. Pārbaudi, ka atbildē title ir "DU testa produkts" un ir piešķirts id
//
// Jautājums: kādu statusu atgriež serveris? 200 vai 201? Pārbaudi ar console.log(response.status)
// Piezīme: DummyJSON produktu īsti nesaglabā, tikai atgriež tā, it kā būtu saglabājis.

describe('DummyJSON: jauns produkts', () => {
    it('POST /products/add atgriež izveidoto produktu', async () => {
        const response = await fetch(`${env('API_URL')}/products/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'DU testa produkts', price: 10 })
        })

        console.log('POST /products/add status:', response.status)
        expect(response.ok).toBe(true)

        const product: any = await response.json()
        expect(product.title).toBe('DU testa produkts')
        expect(product.id).toBeDefined()
    })
})
