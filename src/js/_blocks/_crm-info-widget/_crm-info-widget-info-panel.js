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

    this._INFO_PANEL
      .find("#crm-info-widget__history")
      .append(new CrmWidgetHistoryTable().init());
    this._INFO_PANEL
      .find("#crm-info-widget__files")
      .append(new CrmWidgetFilesTable().init());
    this._INFO_PANEL
      .find("#crm-info-widget__payments")
      .append(new CrmWidgetPaymentsTable().init());

    const telField = this._INFO_PANEL.find(".crm-info-widget__tel-field");
    $.mask.definitions["9"] = "";
    $.mask.definitions["n"] = "[0-9]";
    telField.mask("+996(nnn)nn-nn-nn");

    this._INFO_PANEL
      .find(".crm-info-widget__sign-up-toggle")
      .on("click", () => {
        this._INFO_PANEL
          .find(".crm-info-widget__auth-form")
          .toggleClass("active");
        this._INFO_PANEL
          .find(".crm-info-widget__sign-up-form")
          .toggleClass("active");
      });

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
          <div id="crm-info-widget__history" class="crm-info-widget__tab-body">
            
          </div>
        </li>
        <li class="crm-info-widget__tab">
          <h2 class="crm-info-widget__tab-title">Файлы</h2>
          <div class="crm-info-widget__tab-body">
            <div id="crm-info-widget__files" class="crm-info-widget__table-wrap">
            </div>
        </div>
        </li>
        <li class="crm-info-widget__tab">
          <h2 class="crm-info-widget__tab-title">Оплаты</h2>
          <div class="crm-info-widget__tab-body">
            <div  id="crm-info-widget__payments" class="crm-info-widget__table-wrap">
            </div>
        </div>
        </li>
      </ul>
      <div class="crm-info-widget__auth">
        <div class="crm-info-widget__auth-form active">
          <div class="crm-info-widget__form-group">
            <h3 class="crm-info-widget__form-group-title">Телефон</h3>
            <input type="text" class="crm-info-widget__field crm-info-widget__tel-field" />
          </div>
        </div>
        <div class="crm-info-widget__sign-up-form">
          <div class="crm-info-widget__form-group">
            <h3 class="crm-info-widget__form-group-title">Телефон</h3>
            <input type="text" class="crm-info-widget__field crm-info-widget__tel-field" />
          </div>
          <div class="crm-info-widget__form-group">
            <h3 class="crm-info-widget__form-group-title">Имя</h3>
            <input type="text" class="crm-info-widget__field" />
          </div>
          <div class="crm-info-widget__form-group">
            <h3 class="crm-info-widget__form-group-title">Фамилия</h3>
            <input type="text" class="crm-info-widget__field" />
          </div>
          <div class="crm-info-widget__form-group">
            <h3 class="crm-info-widget__form-group-title">Емейл</h3>
            <input type="text" class="crm-info-widget__field" />
          </div>
        </div>
        <div class="crm-info-widget__auth-btns">
          <button class="crm-info-widget__send-sms">Отправить СМС</button>
          <button class="crm-info-widget__sign-up-toggle">Зарегестрироваться</button>
        </div>
        <p>
          Пожалуйста, войдите, чтобы получить больше информации.
        </p>
      </div>  
      <small class="crm-info-widget__copy">Powered by CRM TECHNOLOGIES</small>
    </aside>
  `;
}
