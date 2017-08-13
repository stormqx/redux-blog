/**
 * Created on 21/04/2017.
 */
import superagent from 'superagent';

import config from '../../config';

const methods = ['get', 'post', 'put', 'patch', 'del'];

export default class ApiClient {
  constructor() {
    methods.forEach((method) => // eslint-disable-line
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](this._formatUrl(path)); //eslint-disable-line

        if (params) {
          request.query(params);
        }

        // if (__SERVER__ && req.get('cookie')) {
        //   request.set('cookie', req.get('cookie'));
        // }

        if (data) {
          request.send(data);
        }

        request.end((err, res) => {
          if (err) reject(err, res.body);

          const ret = {
            data,
            header: {},
          };

          if (res.header['x-total-count']) {
            ret.header['x-total-count'] = res.header['x-total-count'];
          }
          ret.data = res.body;
          resolve(ret);
        });
      })
    );
  }

  _formatUrl(path) {
    const adjustedPath = path[0] !== '/' ? `/${path}` : path;
    //
    // if(__SERVER__) {
    //   return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath;
    // }
    //
    // else return '/api' + adjustedPath;

    return `http://${config.apiHost}:${config.apiPort}${adjustedPath}`;
  }
}
