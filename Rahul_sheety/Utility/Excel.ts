import xlsx from 'xlsx'
export class Exceldata {
    static getData(filepath: string, filename: string) {
        try {
            const workbook = xlsx.readFile(filepath)
            const data = workbook.Sheets[filename]
            const testdata = xlsx.utils.sheet_to_json(data)
            return testdata
        }
        catch (error) {
            console.log(error)
            return error
        }
    }
}