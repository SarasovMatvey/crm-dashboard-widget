class CrmWidgetTable {
  _TABLE = null;

  init() {
    this._TABLE = $(this._body);
    this._TABLE = $(this._TABLE);

    return this._TABLE;
  }

  _body = `
    <div class="crm-info-widget__table-wrap">
      <table class="crm-info-widget__table">
        <thead class="crm-info-widget__header">
          <tr class="crm-info-widget__row">
            <th>Статус</th>
            <th>Тип действия</th>
            <th>Тема</th>
            <th>В связи с</th>
            <th>Дата и время начала</th>
            <th>Дата выполнения</th>
            <th>Ответственный</th>
          </tr>
        </thead>
        <tbody>
          <tr class="crm-info-widget__row">
            <td>Запланировано</td>
            <td>Визит</td>
            <td>sdfsdf</td>
            <td></td>
            <td>06-05-2021 09:30:00</td>
            <td>08-05-2021 09:15:00</td>
            <td>Улан</td>
          </tr>
        </tbody>
      </table>
    </div>  
  `;
}
