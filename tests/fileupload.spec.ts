import{test ,expect} from '@playwright/test'
test("file uplaod",async({page})=>
{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("input#filesToUpload").setInputFiles("C:\\Users\\prasa\\Downloads\\file-sample_150kB.pdf")
    const filename=await page.locator("#fileList li").textContent()
    console.log(filename)
    await expect(await page.locator("#fileList li")).toContainText("file-sample_150kB.")
})

test("Multiplefile uplaod",async({page})=>
{
    const filepath1="C:\\Users\\prasa\\Downloads\\file-example_PDF_1MB.pdf"
    const filepath2="C:\\Users\\prasa\\Downloads\\file-example_PDF_500_kB.pdf"
    const filepath3="C:\\Users\\prasa\\Downloads\\file-sample_150kB.pdf"

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("input#filesToUpload").setInputFiles([filepath1,filepath2,filepath3])

    const filename1=await page.locator("#fileList li").nth(0).textContent()
    console.log(filename1)
    await expect(await page.locator("#fileList li").nth(0)).toContainText(filename1)

    const filename2=await page.locator("#fileList li").nth(1).textContent()
    console.log(filename2)
    await expect(await page.locator("#fileList li").nth(1)).toContainText(filename2)

    const filename3=await page.locator("#fileList li").nth(2).textContent()
    console.log(filename3)
    await expect(await page.locator("#fileList li").nth(2)).toContainText(filename3)
})