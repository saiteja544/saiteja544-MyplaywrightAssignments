import test from '@playwright/test'

test("Sales force Login Example", async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")
    
 /*    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("[name='pw']").fill("TestLeaf@2025")
    await page.locator("#Login").click() */

    await page.locator("//input [contains(@class,'username')]").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[contains(@type,'pass')]").fill("TestLeaf@2025")
    await page.locator("(//input[contains(@value,'Log')])[2]").click()
    await page.waitForTimeout(12000)
    console.log(await page.title())
    

})