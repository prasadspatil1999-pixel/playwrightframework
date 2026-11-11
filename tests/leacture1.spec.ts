import{test,expect} from '@playwright/test'
const year="1995"
const month="April"
const date="14"

test("Calender date selct", async({page})=>
{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    const currentMonth= await page.locator(".ui-datepicker-month")
    const currentyear = page.locator(".ui-datepicker-year")

    while((await currentMonth.textContent()!=month) || (await currentyear.textContent()!=year))
    {
        await page.locator('a').filter({ hasText: 'Prev' }).click()
        //await page.getByText("Prev").click()
    }

    //await page.locator(".ui-datepicker-calendar tbody tr td")
    await  page.getByText(date,{exact:true}).last().click()


})