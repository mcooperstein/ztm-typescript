/* eslint-disable */
import { strict as assert } from "assert";


const rating = 9;
const faveMovie = false;

const suggestMovie = rating > 8 || faveMovie;

assert.equal(suggestMovie, true);

const age = 18;
const isTeenager = age >= 13 && age < 20;

assert.equal(isTeenager, true);