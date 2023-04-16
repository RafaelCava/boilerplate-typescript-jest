import { helloWorld } from '@/main'

describe('Test', () => {
  it('should work', () => {
    expect(helloWorld('Hello World!')).toBe('Hello World!')
  })
})
