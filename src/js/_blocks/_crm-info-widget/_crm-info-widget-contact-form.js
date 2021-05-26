class CrmWidgetContactForm {
  constructor(position = 0) {
    this._position = position;
  }

  _CONTACT_FORM = null;
  _stepsCount = null;
  _filialsInfo = null;

  _filialField = () => this._CONTACT_FORM.find("select[name='filial']");
  _serviceField = () => this._CONTACT_FORM.find("select[name='service']");;
  _workerField = () => this._CONTACT_FORM.find("select[name='worker']");;

  init() {
    this._CONTACT_FORM = $.parseHTML(this._body.trim());
    this._CONTACT_FORM = $(this._CONTACT_FORM);

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

    setFilialsInfo();

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


  setFilial() {
    const filialName = this._filialField.val();

    const services = this._filialsInfo[filialName].map(current => ({
      text: current.name,
      value: current.id,
      isSelected: false,
    }), []);

    const workers = this._filialsInfo[filialName][0].workers.map(current => ({
      text: current.name,
      value: current.name,
      isSelected: false,
    }));

    setSelectOptions(this._serviceField, services);
    setSelectOptions(this._workerField, workers);
  }

  setService() {
    const filialName = this._filialField.val();
    const serviceId = this._serviceField.val();

    let selectedServiceInfo;

    for (const service of this._filialsInfo[filialName]) {
      if (service.id === serviceId) {
        selectedServiceInfo = service;
        break;
      } 
    }

    const workers = selectedServiceInfo.workers.map(current => ({
      text: current.name,
      value: current.name,
      isSelected: false,
    }));

    setSelectOptions(this._workerField, workers);
  }

  setFilialsInfo() {
    return fetch("http://localhost/rest/filials")
            .then(resp => {
              if (resp.ok) return resp.json();
            })
            .then(data => {
              this._filialsInfo = data.data;
            })
  }


  _body = `
    <div class="crm-info-widget__contact-form">
      <div id="crm-info-widget__form-filials" class="crm-info-widget__contact-form-step">
        <div class="crm-info-widget__form-group">
          <h3 class="crm-info-widget__form-group-title">Филиал</h3>
          <select name="filial" type="text" class="crm-info-widget__field">
            <option value="">TEST OPTION</option>
          </select>
        </div>
        <div class="crm-info-widget__form-group">
          <h3 class="crm-info-widget__form-group-title">Услуга</h3>
          <select name="service" type="text" class="crm-info-widget__field">
            <option value="">TEST OPTION</option>
          </select>
        </div>
        <div class="crm-info-widget__form-group">
          <h3 class="crm-info-widget__form-group-title">Исполнитель</h3>
          <select name="worker" type="text" class="crm-info-widget__field">
            <option value="">TEST OPTION</option>
          </select>
        </div>
      </div>
      <div id="crm-info-widget__form-time" class="crm-info-widget__contact-form-step">
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
      <div id="crm-info-widget__form-result" class="crm-info-widget__contact-form-step">
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
