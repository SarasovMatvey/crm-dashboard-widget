class CrmWidgetNavigation {
  constructor(onPrevBtnClick, onNextBtnClick) {
    this._onPrevBtnClick = onPrevBtnClick;
    this._onNextBtnClick = onNextBtnClick;
  }

  _NAVIGATION = null;

  init() {
    this._NAVIGATION = $(this._body);
    this._NAVIGATION = $(this._NAVIGATION);

    for (let i = 0; i < this._dotsCoutn; i++) {
      this._NAVIGATION.append(
        `<span class="crm-info-widget__pagination-item"></span>`
      );
    }

    this._NAVIGATION
      .find(".crm-info-widget__navigation-btn_prev")
      .on("click", this._onPrevBtnClick);
    this._NAVIGATION
      .find(".crm-info-widget__navigation-btn_next")
      .on("click", this._onNextBtnClick);

    return this._NAVIGATION;
  }

  _body = `
    <nav class="crm-info-widget__navigation">
      <button class="crm-info-widget__navigation-btn crm-info-widget__navigation-btn_prev"></button>
      <button class="crm-info-widget__navigation-btn crm-info-widget__navigation-btn_next"></button>
    </nav>  
  `;
}
