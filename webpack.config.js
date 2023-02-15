// bilbioteca que unifica a forma de se declarar o caminho de um arquivo para diferentes sistemas operacionais
const path = require('path')

module.exports = {
    // arquivo de entrada
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    // arquivo de saída
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // para tratar diferentes formatos de arquivos de difetentes formas
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                // interação do babel com o webpack
                use: 'babel-loader'
            }
        ]
    }
}