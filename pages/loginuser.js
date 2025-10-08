exports.LoginUser = class LoginUser {
  constructor(page) {
  this.page = page;
  this.loginuserame = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
  this.loginpassword = page.getByRole('textbox', { name: 'Password' });
  this.loginbutton = page.getByRole('button', { name: 'Login' });
  this.logoutbutton = page.getByRole('link', { name: ' Logout' });
  this.signuploginButton = page.getByRole('link', { name: ' Signup / Login'});
  this.incorrectPasswordText = page.getByText('Your email or password is incorrect!');

  }

    async gotoLoginPage() {
      await this.page.goto('https://automationexercise.com/login');
    }

  async loginToApp(email, password){
    await this.loginuserame.fill(email);
    await this.loginpassword.fill(password);
    await this.loginbutton.click();
  }

  async logout(){
    await this.logoutbutton.click();
  }
}