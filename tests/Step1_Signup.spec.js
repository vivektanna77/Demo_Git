import { test, expect } from "@playwright/test";
import HomePage from "../page/homepage.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import testData from "../test-data/testData.json" assert { type: "json" };

test.describe("Signup flow", () => {
  // Recreate __dirname for ESM
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Function to save test data to JSON file
  //checking
  function saveTestData(email, password) {
    const filePath = path.resolve(__dirname, "../test-data/testData.json"); // ✅ relative path
    let data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    data.userid.email = email;
    data.userid.password = password;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }

  let home;

  test.beforeEach(async ({ page }) => {
    // Clear cookies and local storage before each test
    await page.goto("/"); // Navigate to a blank page to access localStorage
    home = new HomePage(page);
  });

  test("User can sign up and create an account", async ({ page }) => {
    // Generate email
    const email = home.generateRandomEmail();
    // Use the generated email in signup
    await home.signup(email);
    // Create account and get password
    const password = await home.createaccount();
    // Save email and password
    saveTestData(email, password);
    await expect(
      page.getByText(
        "Account Created! Congratulations! Your new account has been successfully"
      )
    ).toBeVisible();

    await page.getByRole("link", { name: "Continue" }).click();
  });

  test("User can sign up with already exisiting email", async ({ page }) => {
    await home.signup(testData.userid.email);
    await expect(page.getByText("Email Address already exist!")).toBeVisible();
    // Add further steps/assertions as needed
  });

  test("User can sign up with wrong email", async ({ page }) => {
    await home.signup(testData.userid.invalidEmail);
    const invalid = await home.invalidemail();
    await expect(invalid).toBe(
      "Please include an '@' in the email address. 'invalidemaildomain' is missing an '@'."
    );

    // Add further steps/assertions as needed
  });
});
