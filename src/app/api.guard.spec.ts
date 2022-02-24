/*
 * File: api.guad.spec.ts
 * Author: Barabás Gergő
 * Copyright: 2022, Narthenon
 * Group: Szoft N/2
 * Date: 2022-02-24
 * Github: https://github.com/Narthenon/
 * Licenc: GNU GPL
*/
import { TestBed } from '@angular/core/testing';

import { ApiGuard } from './api.guard';

describe('ApiGuard', () => {
  let guard: ApiGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApiGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
