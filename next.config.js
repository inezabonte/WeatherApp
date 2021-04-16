const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')
const prod = process.env.NODE_ENV === 'production'

dotenvLoad();

const withNextEnv = nextEnv()

module.exports =withPlugins(
    [
        [withNextEnv],
        [withPWA, {
            pwa: {
                dest: 'public',
                disable: prod ? false : true
            }
        }]
    ],
    {
    future: {
        webpack5: true,
    }
})
