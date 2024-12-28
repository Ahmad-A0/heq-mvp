import { Context, Hono } from 'hono';
import { env } from 'hono/adapter';
import { Bindings } from '..';

const mfm = new Hono<{
    Bindings: Bindings;
    // Variables: {
    //     user: User | null;
    //     session: Session | null;
    // };
}>();

export default mfm