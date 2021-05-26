class CrmWidgetFilesTable {
  _TABLE = null;
  _headers = ["Имя"];
  _info = null;

  init() {
    this._TABLE = $.parseHTML(this._body.trim());
    this._TABLE = $(this._TABLE);

    fetch("http://localhost/rest/attachments")
      .then((resp) => {
        if (resp.ok) return resp.json();
      })
      .then((data) => {
        const tableBody = data["data"].map((value) => ({
          id: value["attachmentsid"],
          name: value["name"],
        }));
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
    console.log(info);

    for (const infoRow of info) {
      const row = $('<tr class="crm-info-widget__row"></tr>');
      row.append(
        `<td><a href="http://localhost/rest/files/${infoRow["id"]}">${infoRow["name"]}</a></td>`
      );
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
