function addingNumbers(a: number, b: number) {
    return a + b;
}

describe('Testing App', () => {
    it('First test in course - should return the sum of numbers', () => {
        expect(addingNumbers(2,2)).toBe(4);
    })
})