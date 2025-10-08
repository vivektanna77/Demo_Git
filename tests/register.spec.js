import {test, expect} from '@playwright/test';
import { RegisterUser } from '../pages/registeruser';

test("Register user", async({page})=>{

    const register = new RegisterUser(page);
    await register.gotoLoginPage();
    await register.newUserSignup('Apurva', 'adp14@yopmail.com');
    await register.registerForm('Test@123', "10", "April", "2021", "Apurva", "Pinjarkar", "Bacancy", "Suvas Apartments", "Thaltej", "India", "Gujarat", "Ahmedabad", "380054", "7878854541")
    await expect(register.loggedInText).toBeVisible();

})