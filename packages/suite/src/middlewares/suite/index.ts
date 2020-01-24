import log from './logMiddleware';
import suite from './suiteMiddleware';
import redirect from './redirectMiddleware';

export default [log, redirect, suite];
