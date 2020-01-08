import { MiddlewareAPI } from 'redux';
import { SUITE } from '@suite-actions/constants';
import { ACCOUNT, SETTINGS } from '@wallet-actions/constants';
import * as selectedAccountActions from '@wallet-actions/selectedAccountActions';
import * as sendFormActions from '@wallet-actions/sendFormActions';
import * as receiveActions from '@wallet-actions/receiveActions';
import * as blockchainActions from '@wallet-actions/blockchainActions';
import { AppState, Action, Dispatch } from '@suite-types';
import { handleRatesUpdate } from '@wallet-actions/fiatRatesActions';

const walletMiddleware = (api: MiddlewareAPI<Dispatch, AppState>) => (next: Dispatch) => (
    action: Action,
): Action => {
    const prevState = api.getState();
    const prevRouter = prevState.router;

    // propagate action to reducers
    next(action);

    if (
        action.type === ACCOUNT.CREATE ||
        action.type === ACCOUNT.UPDATE ||
        action.type === ACCOUNT.REMOVE
    ) {
        api.dispatch(blockchainActions.subscribe());
    }

    // leaving wallet app, reset account reducers
    if (prevRouter.app === 'wallet' && action.type === SUITE.APP_CHANGED) {
        api.dispatch(selectedAccountActions.dispose());
        api.dispatch(sendFormActions.dispose());
        api.dispatch(receiveActions.dispose());
    }

    const nextRouter = api.getState().router;

    if (prevRouter.route && prevRouter.route !== nextRouter.route) {
        if (prevRouter.route.name === 'wallet-send') {
            api.dispatch(sendFormActions.dispose());
        }

        if (prevRouter.route.name === 'wallet-receive') {
            api.dispatch(receiveActions.dispose());
        }
    }

    api.dispatch(selectedAccountActions.getStateForAction(action));

    if (action.type === SETTINGS.CHANGE_NETWORKS) {
        api.dispatch(handleRatesUpdate());
    }

    return action;
};

export default walletMiddleware;
