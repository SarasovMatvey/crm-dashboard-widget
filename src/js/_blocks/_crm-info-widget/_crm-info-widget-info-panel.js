class CrmWidgetInfoPanel {
  _INFO_PANEL = null;

  init() {
    this._INFO_PANEL = $.parseHTML(this._body.trim());
    this._INFO_PANEL = $(this._INFO_PANEL);

    const tabs = this._INFO_PANEL.find(".crm-info-widget__tab-title");
    tabs.on("click", this._tabClickHandler.bind(this));

    this._INFO_PANEL
      .find("#crm-ifno-widget__contact-form-tab .crm-info-widget__tab-body")
      .append(new CrmWidgetContactForm().init());

    return this._INFO_PANEL;
  }

  _tabClickHandler(e) {
    const tabs = this._INFO_PANEL.find(".crm-info-widget__tab-body");
    const selectedTab = $(e.currentTarget.parentNode).find(
      ".crm-info-widget__tab-body"
    );

    for (const tab of tabs) {
      if (tab !== selectedTab[0]) {
        $(tab).removeClass("crm-info-widget__tab-body_active");
      }
    }

    selectedTab.toggleClass("crm-info-widget__tab-body_active");
  }

  _body = `
    <aside class="crm-info-widget__info-panel">
      <ul class="crm-info-widget__tabs">
        <li class="crm-info-widget__tab" id="crm-ifno-widget__contact-form-tab">
          <h2 class="crm-info-widget__tab-title">Онлайн-запись</h2>
          <div class="crm-info-widget__tab-body"></div>
        </li>
        <li class="crm-info-widget__tab">
          <h2 class="crm-info-widget__tab-title">История визитов</h2>
          <div class="crm-info-widget__tab-body">
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
                  <tr class="crm-info-widget__row">
                    <td>Запланировано</td>
                    <td>Визит</td>
                    <td>sdfsdf</td>
                    <td></td>
                    <td>06-05-2021 09:30:00</td>
                    <td>08-05-2021 09:15:00</td>
                    <td>Улан</td>
                  </tr>
                  <tr class="crm-info-widget__row">
                    <td>Запланировано</td>
                    <td>Визит</td>
                    <td>sdfsdf</td>
                    <td></td>
                    <td>06-05-2021 09:30:00</td>
                    <td>08-05-2021 09:15:00</td>
                    <td>Улан</td>
                  </tr>
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
          </div>
        </li>
        <li class="crm-info-widget__tab">
          <h2 class="crm-info-widget__tab-title">Файлы</h2>
          <div class="crm-info-widget__tab-body"><div class="crm-info-widget__table-wrap">
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
              <tr class="crm-info-widget__row">
                <td>Запланировано</td>
                <td>Визит</td>
                <td>sdfsdf</td>
                <td></td>
                <td>06-05-2021 09:30:00</td>
                <td>08-05-2021 09:15:00</td>
                <td>Улан</td>
              </tr>
              <tr class="crm-info-widget__row">
                <td>Запланировано</td>
                <td>Визит</td>
                <td>sdfsdf</td>
                <td></td>
                <td>06-05-2021 09:30:00</td>
                <td>08-05-2021 09:15:00</td>
                <td>Улан</td>
              </tr>
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
        </div>
        </li>
        <li class="crm-info-widget__tab">
          <h2 class="crm-info-widget__tab-title">Оплаты</h2>
          <div class="crm-info-widget__tab-body"><div class="crm-info-widget__table-wrap">
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
              <tr class="crm-info-widget__row">
                <td>Запланировано</td>
                <td>Визит</td>
                <td>sdfsdf</td>
                <td></td>
                <td>06-05-2021 09:30:00</td>
                <td>08-05-2021 09:15:00</td>
                <td>Улан</td>
              </tr>
              <tr class="crm-info-widget__row">
                <td>Запланировано</td>
                <td>Визит</td>
                <td>sdfsdf</td>
                <td></td>
                <td>06-05-2021 09:30:00</td>
                <td>08-05-2021 09:15:00</td>
                <td>Улан</td>
              </tr>
              <tr class="crm-info-widget__row">
                <td>Запланировано</td>
                <td>Визит</td>
                <td>sdfsdf</td>
                <td></td>
                <td>06-05-2021 09:30:00</td>
                <td>08-05-2021 09:15:00</td>
                <td>Улан</td>
              </tr>
              <tr class="crm-info-widget__row">
                <td>Запланировано</td>
                <td>Визит</td>
                <td>sdfsdf</td>
                <td></td>
                <td>06-05-2021 09:30:00</td>
                <td>08-05-2021 09:15:00</td>
                <td>Улан</td>
              </tr>
              <tr class="crm-info-widget__row">
                <td>Запланировано</td>
                <td>Визит</td>
                <td>sdfsdf</td>
                <td></td>
                <td>06-05-2021 09:30:00</td>
                <td>08-05-2021 09:15:00</td>
                <td>Улан</td>
              </tr>
              <tr class="crm-info-widget__row">
                <td>Запланировано</td>
                <td>Визит</td>
                <td>sdfsdf</td>
                <td></td>
                <td>06-05-2021 09:30:00</td>
                <td>08-05-2021 09:15:00</td>
                <td>Улан</td>
              </tr>
              <tr class="crm-info-widget__row">
                <td>Запланировано</td>
                <td>Визит</td>
                <td>sdfsdf</td>
                <td></td>
                <td>06-05-2021 09:30:00</td>
                <td>08-05-2021 09:15:00</td>
                <td>Улан</td>
              </tr>
              <tr class="crm-info-widget__row">
                <td>Запланировано</td>
                <td>Визит</td>
                <td>sdfsdf</td>
                <td></td>
                <td>06-05-2021 09:30:00</td>
                <td>08-05-2021 09:15:00</td>
                <td>Улан</td>
              </tr>
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
        </div></div>
        </li>
      </ul>
    </aside>
  `;
}
