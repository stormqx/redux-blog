/**
 * Created on 21/04/2017.
 */
import superagent from 'superagent';

import config from '../../config/config';

const methods = ['get', 'post', 'put', 'patch', 'del'];

export default class ApiClient {
  constructor() {
    methods.forEach((method) =>
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](this._formatUrl(path));

        if (params) {
          request.query(params);
        }

        // if (__SERVER__ && req.get('cookie')) {
        //   request.set('cookie', req.get('cookie'));
        // }

        if (data) {
          request.send(data);
        }

        request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
      }));
  }

  _formatUrl(path) {
    const adjustedPath = path[0] !== '/' ? '/' + path : path;
    //
    // if(__SERVER__) {
    //   return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath;
    // }
    //
    // else return '/api' + adjustedPath;

     return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath;
  }
}
