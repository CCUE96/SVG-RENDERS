const generateShape = require('./shapes.js');
// test the triangle shape with multiple test cases for shape color text and text color
describe('triangle', () => {
    test('should Create a triangle in svg with specified size, color and text ', () => {
        const shape = generateShape('triangle', 'red', 'ABC', 'white');
        const expected = `<svg width="100" height="100">
        <polygon points="50,0 100,100 0,100" fill="red"/>
        <text x="50" y="50" text-anchor="middle" fill="white">"ABC"</text>
        </svg>`;
        expect(shape).toBe(expected);
    });
});
// test the circle shape with multiple test cases for shape color text and text color
describe('circle', () => {
    test('should Create a circle in svg with specified size, color and text ', () => {
        const shape = generateShape('circle', 'blue', 'DEF', 'black');
        const expected = `<svg width="100" height="100">
        <circle cx="50" cy="50" r="50" fill="blue"/>
        <text x="50" y="50" text-anchor="middle" fill="black">"DEF"</text>
        </svg>`;
        expect(shape).toBe(expected);
    });
});
// test the square shape with multiple test cases for shape color text and text color
describe('square', () => {
    test('should Create a square in svg with specified size, color, and text ', () => {
        const shape = generateShape('square', 'green', 'NWO', 'yellow');
        const expected = `<svg width="100" height="100">
        <rect width="100" height="100" fill="green"/>
        <text x="50" y="50" text-anchor="middle" fill="yellow">"NWO"</text>
        </svg>`;
        expect(shape).toBe(expected);
    });
});