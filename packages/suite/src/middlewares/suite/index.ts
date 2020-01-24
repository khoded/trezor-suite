import log from './logMiddleware';
import suite from './suiteMiddleware';
import redirect from './redirectMiddleware';
import firmware from '../firmware/firmwareMiddleware';

export default [log, redirect, suite, firmware];
