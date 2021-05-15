class CrmWidget {
  #widget = document.createElement('div');

  init() {
    this.#widget.classList.add('crm-info-widget')
    this.#widget.innerHTML = this.#widgetBody;
    document.body.prepend(this.#widget);
    this.#setStyles();

    this.#widget.querySelector('.crm-info-widget__toggle').addEventListener('click', this.#toggleClickHandler.bind(this));
    const tabs = this.#widget.querySelectorAll('.crm-info-widget__tab-title')
    for (const tab of tabs) {
      tab.addEventListener('click', this.#tabClickHandler.bind(this))
    }
  }

  #toggleClickHandler() {
    this.#widget.querySelector('.crm-info-widget__toggle').classList.toggle('crm-info-widget__toggle_active');
    this.#widget.querySelector('.crm-info-widget__info-panel').classList.toggle('crm-info-widget__info-panel_opened');
    this.#widget.querySelector('.crm-info-widget__backdrop').classList.toggle('crm-info-widget__backdrop_visible');
  }

  #tabClickHandler(e) {
    const tabs = this.#widget.querySelectorAll('.crm-info-widget__tab-body');
    const selectedTab = e.currentTarget.parentNode.querySelector('.crm-info-widget__tab-body');

    for (const tab of tabs) {
      if (tab !== selectedTab) {
        tab.classList.remove('crm-info-widget__tab-body_active');
      }
    }
    selectedTab.classList.toggle('crm-info-widget__tab-body_active');
  }

  #css(selector, styles) {
    this.#widget.querySelector(selector).setAttribute('style', styles);
  }

  #setStyles() {
    this.#css('.crm-info-widget__toggle', `
    `);
  }

  
  #widgetBody = `
    <button class="crm-info-widget__toggle">CRM</button>
    <aside class="crm-info-widget__info-panel">
      <ul class="crm-info-widget__tabs">
        <li class="crm-info-widget__tab">
          <h2 class="crm-info-widget__tab-title">Онлайн-запись</h2>
          <div class="crm-info-widget__tab-body">Hello how are you)</div>
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
    <div class="crm-info-widget__backdrop"></div>
  `

}