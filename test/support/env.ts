// Nolasa vērtību no .env faila (process.env).
// Ja vērtības nav, tests uzreiz krīt ar saprotamu paziņojumu.

export function env(name: string): string {
    const value = process.env[name]
    if (!value) {
        throw new Error(`Nav iestatīts ${name}. Nokopē .env.example uz .env (skat. README).`)
    }
    return value
}
