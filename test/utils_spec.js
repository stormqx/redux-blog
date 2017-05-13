/**
 * Created on 29/04/2017.
 */

import {expect} from 'chai';
import { getQuerys, isEmpty } from '../src/utils';

describe('utils', () => {

  describe('getQuerys', () => {

    it('convert query string to object', () => {
      const params = '?page=1&per_page=100';
      const { page, per_page } = getQuerys(params);
      expect(page).to.equal('1');
      expect(per_page).to.equal('100');
    });

    it('input query is not a string', () => {
      const params = 123123;
      const rel = getQuerys(params);
      expect(rel).to.equal(undefined);
    })

  });

  describe('isEmpty', () => {
    it('judge {}', () => {
      const variable = {};
      const rel = isEmpty(variable);
      expect(rel).to.equal(true);
    });

    it('judge []', () => {
      const variable = [];
      const rel = isEmpty(variable);
      expect(rel).to.equal(true);
    });

    it('judge non-empty object', () => {
      const variable = {
        a: 1,
        b: 2,
      };
      const rel = isEmpty(variable);
      expect(rel).to.equal(false);
    });

    it('judge non-empty array', () => {
      const variable = [1, 2, 3];
      const rel = isEmpty(variable);
      expect(rel).to.equal(false);
    });
  });

});