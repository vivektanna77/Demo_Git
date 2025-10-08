exports.RegisterUser = class RegisterUser {
  constructor(page) {
  this.page = page;
  this.signupUsername = page.getByRole('textbox', { name: 'Name' });
  this.signupEmail = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
  this.signupButton = page.getByRole('button', { name: 'Signup' });
  this.titleRadio = page.getByRole('radio', { name: 'Mrs.' });
  this.password = page.getByRole('textbox', { name: 'Password *' });
  this.day = page.locator('#days');
  this.month = page.locator('#months');
  this.year = page.locator('#years');
  this.checkbox1 = page.getByText('Sign up for our newsletter!');
  this.checkbox2 = page.getByText('Receive special offers from');
  this.firstName = page.getByRole('textbox', { name: 'First name *' });
  this.lastName = page.getByRole('textbox', { name: 'Last name *' });
  this.company = page.getByRole('textbox', { name: 'Company', exact: true });
  this.address1 = page.getByRole('textbox', { name: 'Address * (Street address, P.O. Box, Company name, etc.)' });
  this.address2 =  page.getByRole('textbox', { name: 'Address 2' });
  this.country = page.getByLabel('Country *');
  this.state = page.getByRole('textbox', { name: 'State *' });
  this.city = page.getByRole('textbox', { name: 'City *' });
  this.zipcode = page.locator('#zipcode');
  this.mobile = page.getByRole('textbox', { name: 'Mobile Number *' });
  this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
  this.continueButton = page.getByRole('link', { name: 'Continue' });
  this.loggedInText = page.getByText('Logged in as Apurva');
  this.emailExistsText = page.getByText('Email Address already exist!');

  }

  async gotoLoginPage() {
      await this.page.goto('https://automationexercise.com/login');
    }

  async newUserSignup(name, email){
    await this.signupUsername.fill(name);
    await this.signupEmail.fill(email);
    await this.signupButton.click();
  }

  async registerForm(password, day, month, year, fname, lname, company, add1, add2, country, state, city, zip, mobile){
    await this.titleRadio.check();
    await this.password.fill(password);
    await this.day.selectOption({label: day});
    await this.month.selectOption({label: month});
    await this.year.selectOption({label: year});
    await this.checkbox1.click();
    await this.checkbox2.click();
    await this.firstName.fill(fname);
    await this.lastName.fill(lname);
    await this.company.fill(company);
    await this.address1.fill(add1);
    await this.address2.fill(add2);
    await this.country.selectOption({label: country});
    await this.state.fill(state);
    await this.city.fill(city);
    await this.zipcode.fill(zip);
    await this.mobile.fill(mobile);
    await this.createAccountButton.click();
    await this.continueButton.click();
  }

}