import { Injectable } from '@angular/core';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
// @ts-ignore
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import {
  DocumentInitParameters,
  TypedArray,
} from 'pdfjs-dist/types/src/display/api';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {
    GlobalWorkerOptions.workerSrc = pdfjsWorker;
  }

  async getTextContent(
    param: string | URL | TypedArray | ArrayBuffer | DocumentInitParameters
  ) {
    const documentProxy = await getDocument(param).promise;
    const pages = Array.from({ length: documentProxy.numPages }).map(
      async (_, index) => {
        const pageProxy = await documentProxy.getPage(index + 1);
        const content = await pageProxy.getTextContent();

        return content;
      }
    );

    return Promise.all(pages);
  }

  // private readonly pdfMetaData: { [x in FieldName]: number[] } & {
  //   userDetails: number;
  // } = {
  //   userDetails: 34.69,
  //   date: [25, 30],
  //   transaction: [70, 80],
  //   amount: [330, 350],
  //   units: [405, 415],
  //   price: [460, 470],
  //   balance: [540, 550],
  //   mutualFund: [28.93],
  // };

  // userDetail: string = '';
  // rows: Row[] = [];
  // pdfData: TextContent[] = [];

  // async ngOnInit(): Promise<void> {
  //   let row: Row = {};
  //   const userInfo: string[] = [];
  //   this.pdfData = await this.pdfService.fetchData(
  //     './assets/data.pdf',
  //     'ATPPP4903R'
  //   );

  //   this.pdfData.forEach(({ items }) => {
  //     items.forEach((item) => {
  //       if ('transform' in item) {
  //         const {
  //           str,
  //           transform: [, , , , x],
  //         } = item;

  //         if (!item.str) return;

  //         if (x === this.pdfMetaData.userDetails) {
  //           userInfo.push(item.str);
  //         }

  //         if (
  //           x === this.pdfMetaData.mutualFund[0] &&
  //           item.str.toLowerCase().includes('mutual fund')
  //         ) {
  //           row.mutualFund = item.str;
  //         }

  //         if (x > this.pdfMetaData.date[0] && x <= this.pdfMetaData.date[1]) {
  //           row.date = item.str;
  //         }

  //         if (
  //           x > this.pdfMetaData.transaction[0] &&
  //           x <= this.pdfMetaData.transaction[1]
  //         ) {
  //           row.transaction = item.str;
  //         }

  //         if (
  //           x > this.pdfMetaData.amount[0] &&
  //           x <= this.pdfMetaData.amount[1]
  //         ) {
  //           row.amount = item.str;
  //         }

  //         if (x > this.pdfMetaData.units[0] && x <= this.pdfMetaData.units[1]) {
  //           row.units = item.str;
  //         }

  //         if (x > this.pdfMetaData.price[0] && x <= this.pdfMetaData.price[1]) {
  //           row.price = item.str;
  //         }

  //         if (
  //           x > this.pdfMetaData.balance[0] &&
  //           x <= this.pdfMetaData.balance[1]
  //         ) {
  //           row.balance = item.str;
  //           this.rows.push({ ...row });
  //           row = {};
  //         }
  //       }
  //     });

  //     console.log(this.rows);

  //     this.userDetail = userInfo.join('\n');
  //   });
  // }
}
