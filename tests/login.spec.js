import {test, expect} from '@playwright/test';
import { LoginUser } from '../pages/loginuser.js';
import { RegisterUser } from '../pages/registeruser';

test("Login with valid credentials", async({page})=>{

    const login = new LoginUser(page);
    const register = new RegisterUser(page);
    await login.gotoLoginPage();
    await login.loginToApp('adp14@yopmail.com', 'Test@123');
    await expect(register.loggedInText).toBeVisible();

})