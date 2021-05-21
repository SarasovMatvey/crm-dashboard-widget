class CrmWidgetContactForm {
  constructor(position = 0) {
    this._position = position;
  }

  _CONTACT_FORM = null;
  _stepsCount = null;

  init() {
    this._CONTACT_FORM = $.parseHTML(this._body.trim());
    this._CONTACT_FORM = $(this._CONTACT_FORM);

    console.log(
      "a",
      $(this._CONTACT_FORM.find(".crm-info-widget__datepicker")[0])
    );
    // this._CONTACT_FORM.find(".crm-info-widget__datepicker").datepicker();
    this._stepsCount = this._CONTACT_FORM.find(
      ".crm-info-widget__contact-form-step"
    ).length;
    this.setPosition(this._position);
    const pagination = new CrmWidgetPagination(this._stepsCount, 0);
    this._CONTACT_FORM.append(pagination.init());
    const navigation = new CrmWidgetNavigation(
      () => {
        pagination.prev();
        this.prev();
      },
      () => {
        pagination.next();
        this.next();
      }
    );
    this._CONTACT_FORM.append(navigation.init());

    return this._CONTACT_FORM;
  }

  next() {
    this.setPosition(this._position + 1);
  }

  prev() {
    this.setPosition(this._position - 1);
  }

  setPosition(position) {
    if (position > this._stepsCount - 1 || position < 0) return;

    this._position = position;
    this.resetActive();
    $(
      this._CONTACT_FORM.find(".crm-info-widget__contact-form-step")[
        this._position
      ]
    ).addClass("crm-info-widget__contact-form-step_active");
  }

  resetActive() {
    this._CONTACT_FORM
      .find(".crm-info-widget__contact-form-step")
      .removeClass("crm-info-widget__contact-form-step_active");
  }

  _body = `
  <div class="crm-info-widget__contact-form">
    <div class="crm-info-widget__contact-form-step">
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
    <div class="crm-info-widget__contact-form-step">
      <div class="crm-info-widget__form-group">
        <h3 class="crm-info-widget__form-group-title">Дата</h3>
        <input type="date" class="crm-info-widget__field" />
      </div>
      <div class="crm-info-widget__form-group">
        <h3 class="crm-info-widget__form-group-title">Время</h3>
        <select type="text" class="crm-info-widget__field">
          <option value="">13:10</option>
          <option value="">13:10</option>
          <option value="">13:10</option>
          <option value="">13:10</option>
        </select>
      </div>
    </div>
    <div class="crm-info-widget__contact-form-step">
      <div class="crm-info-widget__result-info-wrap">
        <div class="crm-info-widget__form-group">
          <div class="crm-info-widget__result-info">
            <h3 class="crm-info-widget__result-info-title">Назначение</h3>
            <ul class="crm-info-widget__result-info-items">
              <li class="crm-info-widget__result-info-item">
                <span class="crm-info-widget__result-info-item-key">Услуга:</span>
                <span class="crm-info-widget__result-info-item-value">
                  Медицинский педикюр
                </span>
              </li>
              <li class="crm-info-widget__result-info-item">
                <span class="crm-info-widget__result-info-item-key">Услуга:</span>
                <span class="crm-info-widget__result-info-item-value">
                  Медицинский педикюр
                </span>
              </li>
              <li class="crm-info-widget__result-info-item">
                <span class="crm-info-widget__result-info-item-key">Услуга:</span>
                <span class="crm-info-widget__result-info-item-value">
                  Медицинский педикюр
                </span>
              </li>
              <li class="crm-info-widget__result-info-item">
                <span class="crm-info-widget__result-info-item-key">Услуга:</span>
                <span class="crm-info-widget__result-info-item-value">
                  Медицинский педикюр
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="crm-info-widget__form-group">
          <div class="crm-info-widget__result-info">
            <h3 class="crm-info-widget__result-info-title">Заказчик</h3>
            <ul class="crm-info-widget__result-info-items">
              <li class="crm-info-widget__result-info-item">
                <span class="crm-info-widget__result-info-item-key">
                  Заказчик:
                </span>
                <span class="crm-info-widget__result-info-item-value">
                  искендер нурбаев
                </span>
              </li>
              <li class="crm-info-widget__result-info-item">
                <span class="crm-info-widget__result-info-item-key">
                  Заказчик:
                </span>
                <span class="crm-info-widget__result-info-item-value">
                  искендер нурбаев
                </span>
              </li>
              <li class="crm-info-widget__result-info-item">
                <span class="crm-info-widget__result-info-item-key">
                  Заказчик:
                </span>
                <span class="crm-info-widget__result-info-item-value">
                  искендер нурбаев
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="crm-info-widget__form-group">
        <button class="crm-info-widget__confirm-btn">Подтвердить</button>
      </div>
    </div>
  </div>
`;
}
