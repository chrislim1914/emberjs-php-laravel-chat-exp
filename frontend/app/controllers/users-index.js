import Em from 'ember';

export default Em.ArrayController.extend({
  queryParams: ["page", "perPage"],
  pageBinding: "content.page",
  perPageBinding: "content.perPage",
  totalPagesBinding: "content.totalPages",
  page: 1,
  perPage: 10,
	actions: {
	}
});