import { test, expect } from '@playwright/test';
import { LoginUser } from '../pages/loginuser.js';
import { RegisterUser } from '../pages/registeruser';

test("Login with incorrect email or password", async ({ page }) => {
    const login = new LoginUser(page);
    await login.gotoLoginPage();
    await login.loginToApp('adp14@yopmail.com', 'sijfbhihwbfhbi');
    await expect(login.incorrectPasswordText).toBeVisible();
})

test('Logout User', async ({ page }) => {
    const login = new LoginUser(page);
    await login.gotoLoginPage();
    await login.loginToApp('adp14@yopmail.com', 'Test@123');
    await login.logout();
    await expect(login.signuploginButton).toBeVisible();
})

test('Register user with existing email', async ({ page }) => {
    const register = new RegisterUser(page);
    await register.gotoLoginPage();
    await register.newUserSignup('Apurva', 'adp14@yopmail.com')
    await expect(register.emailExistsText).toBeVisible();
})