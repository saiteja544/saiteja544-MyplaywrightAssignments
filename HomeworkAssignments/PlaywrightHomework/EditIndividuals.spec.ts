import {test,  expect} from '@playwright/test'

test("Edit Individual", async({page})=>
{
   //Navigate to application
   await page.goto("https://login.salesforce.com/") 
   //Sign in
   await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
   await page.locator("#password").fill("TestLeaf@2025")
   await page.locator("#Login").click()
   //assert with page title
   await page.waitForLoadState('load')
   await expect.soft(page).toHaveTitle("Home | Salesforce")
   //Click on toggle menu
   await page.locator("//button[@title='App Launcher']").click()
   // Click view All  from App Launcher
   //await page.waitForTimeout(3000)
   await page.waitForLoadState('domcontentloaded')
   await page.locator("//button[contains(text(),'View All')]").click()
   // search for Individuals
   
  // await page.locator(".app-dnd-identifier one-app-launcher-app-tile").last().waitFor()
   await page.locator("[placeholder='Search apps or items...']").fill("Individuals")
   //click on Individuals from search results
   await page.locator("//p[@class='slds-truncate']/mark").click()
   //Search the Individuals last name
   await page.locator("[name='Individual-search-input']").fill("teja1")
   await page.locator("[name='Individual-search-input']").press('Enter')
   //Click on the Dropdown icon and Select Edit
   
   //await page.locator("//tbody/tr/td//a[@title='Show 2 more actions']").click()
   
   //await page.locator("(//span[@title='Last Modified Date']/following::span[@part='boundary'])[1]").click()
   //await page.locator('lightning-icon').filter({ hasText: 'Show more actions' }).first().click()
   await page.locator("(//lightning-button-menu[@class='slds-dropdown-trigger slds-dropdown-trigger_click'])[2]").click()
   await page.locator("//a[@title='Edit']").last().click()
   // Select Salutation as 'Mr'
   await page.getByRole('combobox',{name:'Salutation'}).click()
   await page.getByRole('option',{name:'Mr.'}).click()
   //Now enter the first name
   await page.locator("[placeholder='First Name']").fill("sai1")
   //Click on Save
   await page.locator(".forceActionButton[title='Save']").click()
   // Verify the first name
   await expect(page.locator(".toastMessage")).toContainText("sai1")

})

