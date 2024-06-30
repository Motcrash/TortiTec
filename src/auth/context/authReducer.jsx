import { types } from '../types/types.js';

export const authReducer = ( state = {}, action) => {
    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                logged: true,
                name: action.paload,
            };
        case types.logout:
            return {
                logged: false,
            }
        default:
            return state;
    }
}