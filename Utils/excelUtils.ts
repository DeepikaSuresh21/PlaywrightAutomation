import * as XLSX from 'xlsx';

export interface ExcelRow {
  TC_ID: string | number;
  [key: string]: any;
}

class ExcelUtils {
  private workbook: XLSX.WorkBook;

  constructor(filePath: string) {
    this.workbook = XLSX.readFile(filePath);
  }

  getSheetData(sheetName: string): ExcelRow[] {
    const sheet = this.workbook.Sheets[sheetName];

    if (!sheet) {
      throw new Error(`Sheet "${sheetName}" not found`);
    }

    return XLSX.utils.sheet_to_json<ExcelRow>(sheet);
  }

  findRowByTCID(sheetData: ExcelRow[], tcId: string | number): ExcelRow | undefined {
    return sheetData.find((row) => String(row.TC_ID) === String(tcId));
  }
}

export default ExcelUtils;