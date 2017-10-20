module.exports = function (config) {
    config.set({
        // ベースパス
        basePath: '',
        // 使用するテスティングフレームワーク
        frameworks: ['mocha', 'karma-typescript'],
        // karmaでブラウザで読み込むファイル
        files: [
            './src/**/*.spec.ts',
        ],
        // list of files to exclude
        exclude: [
        ],
        
        preprocessors: {
            '**/*.ts': ['karma-typescript']
        },
        
        // テスト結果を装飾するreporterの種類
        reporters: ['mocha', 'karma-typescript'],

        // 使用するポート番号
        port: 9876,
    
        // 表示する結果をカラーで表示
        colors: true,
    
    
        // logのレベル
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,
    
    
        // テストファイルの変更を自動で監視
        autoWatch: true,
    
        // テストを実行するブラウザを設定
        browsers: ['Chrome'],
    
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        // CIモードにするかどうか、Circle CIでテストを通したかったら、ここをtrueに
        //singleRun: false,
    
        // 同時にいくつのブラウザで実行可能にするかどうかの設定
        //concurrency: Infinity
    })
}