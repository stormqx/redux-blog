/**
 * Created on 21/04/2017.
 */

require('babel-polyfill');

module.exports = {
  // client
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || '3009',

  // server
  TOTAL_PAGE_COUNT: 10,
}
