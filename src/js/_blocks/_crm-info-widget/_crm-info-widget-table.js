class CrmWidgetTable {
  constructor(headers, info) {
    this._headers = headers;
    this._info = info;
  }

  _TABLE = null;

  init() {
    this._TABLE = $.parseHTML(this._body.trim());
    this._TABLE = $(this._TABLE);

    return this._TABLE;
  }

  setHeaders(headers) {
    for (const header of headers) {
      this._TABLE
        .find("thead tr")
        .append(`<th class="crm-info-widget__row">${header}</th>`);
    }
  }

  setTableBody(info) {
    for (const infoRow of info) {
      const row = $('<tr class="crm-info-widget__row"></tr>');
      for (const infoItem of infoRow) {
        row.append(`<td>${infoItem}</td>`);
      }
      this._TABLE.find("tbody").append(row);
    }
  }

  _body = `
    <div class="crm-info-widget__table-wrap">
      <table class="crm-info-widget__table">
        <thead class="crm-info-widget__header">
          <tr class="crm-info-widget__row">
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>  
  `;
}
