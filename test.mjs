import assert from 'node:assert'
import {describe, it} from 'node:test'
import olt from './index.mjs'

describe('olt', () => {
  it('should render with data', () => {
    const data = {name: 'JoJo'}
    assert.strictEqual(
      olt('name: ${name}, calc: ${1 + 1}, nested: ${`${0}`}')(data),
      'name: JoJo, calc: 2, nested: 0'
    )
  })

  it('should render with empty argument', () => {
    assert.strictEqual(olt('calc: ${1 + 1}')(), 'calc: 2')
  })

  it('should not escape plain text', () => {
    assert.strictEqual(
      olt(String.raw`\\ name` + '${punc}')({punc: '.'}),
      String.raw`\\ name.`
    )
  })
})
