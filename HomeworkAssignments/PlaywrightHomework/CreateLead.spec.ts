import {test,  expect} from '@playwright/test'

test("Create Lead", async({page})=>
{
   //Navigate to application
   await page.goto("https://login.salesforce.com/") 
   //Sign in
   await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
   await page.locator("#password").fill("TestLeaf@2025")
   await page.locator("#Login").click()
   //assert with page title
   //await page.waitForLoadState()
   await expect(page).toHaveTitle("Lightning Experience")
   //Click on toggle menu
   await page.locator("//button[@title='App Launcher']").click()
   await page.waitForLoadState('domcontentloaded')
   //Click view All and click Sales from App Launcher
   await page.locator("//button[contains(text(),'View All')]").click()
   
   await page.locator("//div[@data-name='Sales']//a").click()
   //Click on Leads tab
   await page.locator("//a[@title='Leads']").click()
   // Click on New button
   await page.locator("//a[@title='New']").click()
   //Select Salutation dropdown
   await page.getByRole('combobox', {name: 'Salutation'}).click();
   await page.getByRole('option', {name: 'Mr.'}).click();
   await page.locator("//input[@name='lastName']").fill("teja")
   //Enter the Company Name
   await page.locator("//input[@name='Company']").fill("Herbalife")
   //Click Save and Verify Leads name created
   await page.locator("[name='SaveEdit']").click()
   const leadCreationSuccMsg=await page.locator(".forceActionsText").textContent()
   expect(leadCreationSuccMsg).toContain("Mr.  "+"teja")
   
   

})