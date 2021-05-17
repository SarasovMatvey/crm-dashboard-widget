class CrmWidgetToggleBtn {
  constructor(onClick) {
    this._onClick = onClick;
  }
  
  _TOGGLE_BTN = null;

  init() {
    this._TOGGLE_BTN = $.parseHTML(this._body.trim());
    this._TOGGLE_BTN = $(this._TOGGLE_BTN);
    this._TOGGLE_BTN.on('click', e => this._onClick(e, this._TOGGLE_BTN));
    return this._TOGGLE_BTN;
  }

  _body = `
    <button class="crm-info-widget__toggle">CRM</button>
  `
}