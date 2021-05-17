class CrmWidgetBackdrop {
  _BACKDROP = null;

  init() {
    this._BACKDROP = $.parseHTML(this._body.trim());
    this._BACKDROP = $(this._BACKDROP);

    return this._BACKDROP;
  }

  _body = `
    <div class="crm-info-widget__backdrop"></div>
  `;
}