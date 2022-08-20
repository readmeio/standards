module.exports = {
  arrowParens: 'avoid',
  printWidth: 120,
  singleQuote: true,

  importOrder: ['@Hub/(.*)$', '^@core/(.*)$', '^@routes/(.*)$',  '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true
};
