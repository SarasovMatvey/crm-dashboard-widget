class CrmWidget {
  _CRM_WIDGET = null;
  
  init() {
    this._CRM_WIDGET = $.parseHTML(this._body.trim());
    this._CRM_WIDGET = $(this._CRM_WIDGET);

    this._CRM_WIDGET.append(new CrmWidgetToggleBtn(this._toggleClickHandler.bind(this)).init());
    this._CRM_WIDGET.append(new CrmWidgetInfoPanel().init());
    this._CRM_WIDGET.append(new CrmWidgetBackdrop().init());

    return this._CRM_WIDGET;
  }

  _toggleClickHandler(e, btn) {
    this._CRM_WIDGET.find('.crm-info-widget__toggle').toggleClass('crm-info-widget__toggle_active');
    this._CRM_WIDGET.find('.crm-info-widget__info-panel').toggleClass('crm-info-widget__info-panel_opened');
    this._CRM_WIDGET.find('.crm-info-widget__backdrop').toggleClass('crm-info-widget__backdrop_visible');
  }

  _body = `
    <div class="crm-info-widget"></div>
  `
}