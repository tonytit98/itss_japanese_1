#!/usr/bin/env node

'use strict';

const isPrimeNumber = number => {
  if(number <= 2) return false
  for(let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if(number % i === 0) return false
  }
  return true
}

console.log(process.argv.slice(2).map(el => Number(el)).filter(isPrimeNumber))