import test from '@playwright/test'

test("Facebook Registartion", async({page})=>{

  await page.goto("https://en-gb.facebook.com/")  
  await page.locator("._6ltg a").click()
  await page.locator("//input[@name='firstname']").fill("Saiteja")
  await page.locator("//input[contains(@name,'last')]").fill("korivi")
  await page.selectOption("#day",{value:"27"})
  await page.selectOption("#month",{index:5})
  await page.selectOption("#year",{label:"1992"})
  await page.locator("//label[normalize-space()='Male']").check()
  await page.locator("//input[@name='reg_email__']").fill("korivisaiteja@gmail.com")
  await page.locator("#password_step_input").fill("Teja544%")
  await page.waitForTimeout(20000)

})