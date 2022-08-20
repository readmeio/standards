module.exports = {
  arrowParens: 'avoid',
  printWidth: 120,
  singleQuote: true,

  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true
};
