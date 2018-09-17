let path = require('path');

let web = {
    target: 'web',
    entry: {
        'bundle': path.resolve(__dirname, './src/main.js')
    }
};

let dev = {
    target: 'node',
    entry: {
        'test_integ': path.resolve(__dirname, './tests/tests_integ.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    }
}

module.exports = [web, dev];