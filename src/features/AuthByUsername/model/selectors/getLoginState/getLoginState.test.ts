import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('should return login value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: '123', password: 'asd', error: 'ERROR' },
        };
        expect(getLoginState(state as StateSchema)).toEqual({ username: '123', password: 'asd', error: 'ERROR' });
    });
});
