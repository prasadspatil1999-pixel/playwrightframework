import { expect, test } from '@playwright/test'
test("Calender", async ({ page }) => {
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()
    const currentMonth = page.locator(".ui-datepicker-month")
    const currentYear = page.locator(".ui-datepicker-year")

    const date = 14
    const month = "April"
    const year = 1995

    const allmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"]
    function getMontghIndex(month: any) {
        return allmonth.indexOf(month)
    }

    while (true) {
        const getCurrentMonthTest = await currentMonth.textContent()
        const getCurrentYearTest = Number(await currentYear.textContent())
        if (getCurrentMonthTest === month && getCurrentYearTest === year) {
            break
        }
        const geturrentMonthIndex = getMontghIndex(getCurrentMonthTest)
        const getSelectMonthIndex = getMontghIndex(month)
        if (getCurrentYearTest > year || getCurrentYearTest === year && geturrentMonthIndex > getSelectMonthIndex) {
            await page.locator(".ui-icon").first().click()
        }
        else {
            await page.locator(".ui-icon").last().click()
        }
    }
    await page.getByText(date.toString(), { exact: true }).click()
    const checkdat = date.toString().padStart(2, "0")
    const checkmonth = (getMontghIndex(month) + 1).toString().padStart(2, "0")
    const verifdate = `${checkmonth}/${checkdat}/${year}`
    await expect(page.locator("#sixth_date_picker")).toHaveValue(verifdate)
})