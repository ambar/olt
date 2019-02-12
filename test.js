import olt from '.'

describe('olt', () => {
  it('should render with data', () => {
    const data = {name: 'JoJo'}
    expect(olt('name: ${name}, calc: ${1 + 1}, nested: ${`${0}`}')(data)).toBe(
      'name: JoJo, calc: 2, nested: 0'
    )
  })

  it('should render with empty argument', () => {
    expect(olt('calc: ${1 + 1}')()).toBe('calc: 2')
  })

  it('should not escape plain text', () => {
    expect(olt(String.raw`\\ name` + '${punc}')({punc: '.'})).toBe(
      String.raw`\\ name.`
    )
  })
})
