class CrmWidgetPagination {
  constructor(dotsCoutn = 1, position = 0) {
    this._dotsCoutn = dotsCoutn;
    this._position = position;
  }

  _PAGINATION = null;

  init() {
    this._PAGINATION = $(this._body);
    this._PAGINATION = $(this._PAGINATION);

    for (let i = 0; i < this._dotsCoutn; i++) {
      this._PAGINATION.append(
        `<span class="crm-info-widget__pagination-item"></span>`
      );
    }

    this.setPosition(this._position);

    return this._PAGINATION;
  }

  next() {
    if (this._position + 1 > this._dotsCoutn - 1) return;
    this.resetActive();
    this.setPosition(++this._position);
  }

  prev() {
    if (this._position - 1 < 0) return;
    this.resetActive();
    this.setPosition(--this._position);
  }

  setPosition(position) {
    this._position = position;

    $(
      this._PAGINATION.find(".crm-info-widget__pagination-item")[this._position]
    ).addClass("crm-info-widget__pagination-item_active");
  }

  resetActive() {
    this._PAGINATION.find('.crm-info-widget__pagination-item').removeClass('crm-info-widget__pagination-item_active');
  }

  _body = `
    <nav class="crm-info-widget__pagination"></nav>  
  `;
}
