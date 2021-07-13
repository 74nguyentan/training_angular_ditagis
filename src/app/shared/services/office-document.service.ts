import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OfficeDocumentService {
  async exportDocx(param: {
    method: 'GET' | 'POST';
    endpoint: string;
    body?: BodyInit;
    filename?: string;
  }): Promise<boolean> {
    const res = await fetch(param.endpoint, {
      method: param.method,
      body: param.body,
      headers: {
        'Access-Control-Expose-Headers': 'Content-Disposition',
      },
    });
    if (res.status === 200) {
      const blob = await res.blob();
      const disposition = res.headers.get('Content-Disposition');
      let filename = param.filename;
      if (!filename) {
        if (disposition && disposition.indexOf('attachment') !== -1) {
          const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
          const matches = filenameRegex.exec(disposition);
          if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
          }
        }
      }
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();
      a.remove(); // afterwards we remove the element again
    } else {
      const json = await res.json();
      throw json;
    }
    return true;
  }
}
