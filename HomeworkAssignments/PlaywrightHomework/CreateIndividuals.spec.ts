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
   await page.waitForLoadState('load')
   await expect(page).toHaveTitle("Home | Salesforce")
   //Click on toggle menu
   await page.locator("//button[@title='App Launcher']").click()
   await page.waitForLoadState('domcontentloaded')
   // Click view All  from App Launcher
   await page.locator("//button[contains(text(),'View All')]").click()
   // search for Individuals
   
   await page.locator("[placeholder='Search apps or items...']").fill("Individuals")
   //click on Individuals from search results
   await page.locator("//p[@class='slds-truncate']/mark").click()
   // Click on New Individual
   await page.locator("//a[@title='New']").last().click()
   // Enter the Last Name
   await page.locator("[placeholder='Last Name']").fill("teja1")
   //Click save
   await page.locator(".forceActionButton[title='Save']").click()
   //verify Individuals Name
   await expect(page.locator(".toastMessage")).toContainText("teja1")

})