import { Hono } from 'hono'

import mfm from './routes/medicalFacilitiesMap';
import hsa from './routes/healthSavingsAccount';
import phv from './routes/personalHealthVault';
import auth from './auth';

export type Bindings = {
    // DB: D1Database;
    // KV: KVNamespace;
    // TYPESENSE_API_KEY: string;
    // ORIGIN: string;
};

const app = new Hono<{
    Bindings: Bindings;
    // Variables: {
    //     user: User | null;
    //     session: Session | null;
    // };
}>();

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route("/auth", auth)

app.route("/hsa", hsa)
app.route("/mfm", mfm)
app.route("/phv", phv)

export default app
export type AppType = typeof app
