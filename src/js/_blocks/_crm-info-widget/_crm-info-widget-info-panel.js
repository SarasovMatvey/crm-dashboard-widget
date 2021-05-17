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
          <div class="crm-info-widget__tab-body">Hello how are you)</div>
        </li>
        <li class="crm-info-widget__tab">
          <h2 class="crm-info-widget__tab-title">Файлы</h2>
          <div class="crm-info-widget__tab-body">Hello how are you)</div>
        </li>
        <li class="crm-info-widget__tab">
          <h2 class="crm-info-widget__tab-title">Оплаты</h2>
          <div class="crm-info-widget__tab-body">Hello how are you)</div>
        </li>
      </ul>
    </aside>
  `;
}
