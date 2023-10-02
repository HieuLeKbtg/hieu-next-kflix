import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            // const options = {
            //     webpackOptions: {
            //         resolve: {
            //             extensions: ['.ts', '.tsx', '.js'],
            //         },
            //         module: {
            //             rules: [
            //                 {
            //                     test: /\.tsx?$/,
            //                     loader: 'ts-loader',
            //                     options: { transpileOnly: true }
            //                 }
            //             ]
            //         }
            //     }
            // }
            // on('file:preprocessor', wp(options))
            // e2e: nxE2EPreset(__filename, { cypressDir: 'cypress' })
        }
    }
})
