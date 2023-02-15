// bilbioteca que unifica a forma de se declarar o caminho de um arquivo para diferentes sistemas operacionais
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// o webpack pode funcionar de formas diferentes dependendo se o ambiente for de desenvolvimento ou de produção (online)
// variável ambiente
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    // para visualizar o código original no console
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
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
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'public')
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    // para tratar diferentes formatos de arquivos de difetentes formas
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                // interação do babel com o webpack
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}
