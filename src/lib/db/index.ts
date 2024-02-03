import { neon, neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

neonConfig.fetchConnectionCache = true

if (!process.env.NEON_DB_CONNECTION_STRING) {
  throw new Error('DATABASE_URL is not defined')
}

const sql = neon(process.env.NEON_DB_CONNECTION_STRING)

export const db = drizzle(sql)
