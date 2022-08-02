function PaginationHelper(collection, itemsPerPage) {
  this._collection = collection;
  this._itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function () {
  return this._collection.length;
};

PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.itemCount() / this._itemsPerPage);
};

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex + 1 > this.pageCount()) {
    return -1;
  } else {
    return pageIndex === this.pageCount() - 1
      ? this.itemCount() % this._itemsPerPage
      : this._itemsPerPage;
  }
};

PaginationHelper.prototype.pageIndex = function (itemIndex) {
  return itemIndex >= this.itemCount() || itemIndex < 0
    ? -1
    : Math.floor(itemIndex / this._itemsPerPage);
};

module.exports = { PaginationHelper };
