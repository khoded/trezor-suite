export const VALIDATION_ERRORS = {
    IS_EMPTY: 'is-empty',
    NOT_ENOUGH: 'not-enough',
    NOT_VALID: 'not-valid',
    NOT_NUMBER: 'not-number',
    NOT_HEX: 'not-hex',
    NOT_IN_RANGE: 'not-in-range',
    NOT_IN_RANGE_DECIMALS: 'not-in-range-decimals',
    CANNOT_SEND_TO_MYSELF: 'cannot-send-to-myself',
} as const;

export const CUSTOM_FEE = 'custom' as const;
export const FIRST_OUTPUT_ID = 0;
export const BTC_RBF_SEQUENCE = 0xffffffff - 2;
export const XRP_FLAG = 0x80000000; 
export const U_INT_32 = 0xffffffff;
export const ETH_DEFAULT_GAS_PRICE = '21000';
export const ETH_DEFAULT_GAS_LIMIT = '1';
//export const DCR_STANDARD_TX = '0.0001'
// UI
export const LABEL_HEIGHT = 38;
