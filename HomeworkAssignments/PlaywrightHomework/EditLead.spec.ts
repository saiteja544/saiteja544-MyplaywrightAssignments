import {test,expect} from '@playwright/test'
test("Edit Lead", async({page})=>
{
    //Navigate to URl
    await page.goto("http://leaftaps.com/opentaps/control/main")
    //Login with credentials
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    //Click CRM/SFA link
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
    //Click Leads link
    await page.locator("//a[text()='Leads']").click()
    // Click on Create Lead
    await page.locator("//a[text()='Create Lead']").click()
    // Enter company name
    await page.locator("#createLeadForm_companyName").fill("Herbalife")
    // Enter first name
    await page.locator("#createLeadForm_firstName").fill("sai") 
    //Enter last name
    await page.locator("#createLeadForm_lastName").fill("teja")
    //  Click on Create Lead button
    await page.locator("[name='submitButton']").click()
    // Click Edit
    await page.locator("//a[text()='Edit']").click()
    // Change the company name
    await page.locator("#updateLeadForm_companyName").fill("Herbalife Nutrition")
    //Click Update
    await page.locator("//input [@value='Update']").click()
    //Assert updated company name
    await expect(page.locator("#viewLead_companyName_sp")).toContainText("Herbalife Nutrition")

})