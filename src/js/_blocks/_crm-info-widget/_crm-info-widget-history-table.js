class CrmWidgetHistoryTable {
  _TABLE = null;
  _headers = ["Статус", "Тип действия", "Ответственный"];
  _info = null;

  init() {
    this._TABLE = $.parseHTML(this._body.trim());
    this._TABLE = $(this._TABLE);

    fetch("http://localhost/rest/history")
      .then((resp) => {
        if (resp.ok) return resp.json();
      })
      .then((data) => {
        const tableBody = data["data"].map((value) => [
          value["subject"],
          value["activitytype"],
          value["owner_first_name"] + " " + value["owner_last_name"],
        ]);
        this.setTableBody(tableBody);
      });

    this.setHeaders(this._headers);

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
