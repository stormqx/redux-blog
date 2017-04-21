/**
 * Created on 21/04/2017.
 */
import config from '../../config/config';

const methods = ['get', 'post', 'put', 'patch', 'del'];

export default class ApiClient {
  constructor() {
    methods.forEach( (method) => {
      this[method] = async(path, {param, data} = {}) => {
        try {
          //暂时只支持get操作，
          //TODO: 其他操作在需要时进行补充。
          if(param) {

          }

          const response = await fetch(this._formatUrl(path));
          const data = await response.json();
          return data;
        } catch(err) {
          console.log('1'+err);
        };
      }
    })
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