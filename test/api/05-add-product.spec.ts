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
        // Tavs kods šeit

        // Izdzēs šo rindu, kad tests ir uzrakstīts:
        throw new Error('Uzdevums vēl nav izpildīts')
    })
})
