/* eslint-disable import/extensions */

import {
  filterBy,
  sortOrder,
  searchBy,
  arithmeticAverage,
} from '../src/data.js';

import lol from '../src/data/lol/lol.js';

const champions = lol.data;
const dataLol = Object.values(champions);

describe('filterBy', () => {
  it('debería ser una función', () => {
    expect(typeof filterBy).toBe('function');
  });

  it('debería retornar rol Mago', () => {
    const filterRol = filterBy(champions, 'Mage');
    expect(filterRol).toHaveLength(52);
  });
  it('debería retornar rol Tank', () => {
    const filterRol = filterBy(champions, 'Tank');
    expect(filterRol).toHaveLength(40);
  });
  it('debería retornar rol Fighter', () => {
    const filterRol = filterBy(champions, 'Fighter');
    expect(filterRol).toHaveLength(66);
  });
  it('debería retornar rol Apoyo', () => {
    const filterRol = filterBy(champions, 'Support');
    expect(filterRol).toHaveLength(27);
  });
  it('debería retornar rol Tirador', () => {
    const filterRol = filterBy(champions, 'Marksman');
    expect(filterRol).toHaveLength(24);
  });
});

describe('sortOrder', () => {
  it('is a function', () => {
    expect(typeof sortOrder).toBe('function');
  });

  it('debería retornar un array de objetos ordenados de a-z', () => {
    expect(sortOrder(dataLol, 'az')).toEqual(dataLol);
  });

  it('debería retornar un array de objetos ordenados de z-a', () => {
    expect(sortOrder(dataLol, 'za')).toEqual(dataLol.reverse());
  });
});

describe('searchBy', () => {
  it('debería ser una función', () => {
    expect(typeof searchBy).toBe('function');
  });
  it('debería retornar Aatrox para búsqueda : "Aatrox" ', () => {
    const search = searchBy(dataLol, 'aatrox');
    expect(search).toHaveLength(1);
  });
  it('debería retornar varios campeones para búsqueda : "z" ', () => {
    const search = searchBy(dataLol, 'z');
    expect(search).toHaveLength(5);
  });
  it('debería retornar (nada) para " + "(cualquier caracter)', () => {
    const search = searchBy(dataLol, '+');
    expect(search).toHaveLength(0);
  });
});

describe('arithmeticAverage', () => { // tome de ejemplo al primer campeon aahri
  it('deberia retornar el valor calculado para utilidad', () => {
    expect(arithmeticAverage(dataLol[0], 'Utility')).toEqual('125.9');
  });
  it('deberia retornar el valor calculado para daño', () => {
    expect(arithmeticAverage(dataLol[0], 'Damage')).toEqual('0.0');
  });
  it('deberia retornar el valor calculado para dureza', () => {
    expect(arithmeticAverage(dataLol[0], 'Hardness')).toEqual('140.7');
  });
  it('deberia retornar el valor calculado para movilidad', () => {
    expect(arithmeticAverage(dataLol[0], 'Mobility')).toEqual('111.1');
  });
  it('deberia retornar el valor calculado para control de masas', () => {
    expect(arithmeticAverage(dataLol[0], 'Mp')).toEqual('78.0');
  });
});
