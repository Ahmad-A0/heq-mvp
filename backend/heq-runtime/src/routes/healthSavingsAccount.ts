import { Context, Hono } from 'hono';
import { env } from 'hono/adapter';
import { Bindings } from '..';

const hsa = new Hono<{
    Bindings: Bindings;
    // Variables: {
    //     user: User | null;
    //     session: Session | null;
    // };
}>();

export default hsa