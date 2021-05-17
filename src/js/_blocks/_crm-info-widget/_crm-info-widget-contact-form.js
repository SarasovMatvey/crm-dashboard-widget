class CrmWidgetContactForm {

  _CONTACT_FORM = null;

  init() {
    this._CONTACT_FORM = $.parseHTML(this._body.trim());
    this._CONTACT_FORM = $(this._CONTACT_FORM);

    return this._CONTACT_FORM;
  }

  _body = `
    <div class="crm-info-widget__contact-form">
      <div class="crm-info-widget__contact-form-step" data-step="0">
        <div class="crm-info-widget__form-group">
          <h3 class="crm-info-widget__form-group-title">Филиал</h3>
          <select type="text" class="crm-info-widget__field">
            <option value="">TEST OPTION</option>
          </select>
        </div>
        <div class="crm-info-widget__form-group">
          <h3 class="crm-info-widget__form-group-title">Услуга</h3>
          <select type="text" class="crm-info-widget__field">
            <option value="">TEST OPTION</option>
          </select>
        </div>
        <div class="crm-info-widget__form-group">
          <h3 class="crm-info-widget__form-group-title">Исполнитель</h3>
          <select type="text" class="crm-info-widget__field">
            <option value="">TEST OPTION</option>
          </select>
        </div>
      </div>
      <nav class="crm-info-widget__pagination">
        <span class="crm-info-widget__pagination-item"></span>
        <span class="crm-info-widget__pagination-item"></span>
        <span class="crm-info-widget__pagination-item"></span>
      </nav>
    </div>
  `;
}