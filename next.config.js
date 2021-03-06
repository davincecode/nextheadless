const withPlugins = require("next-compose-plugins")
const withImages = require("next-images")

const nextConfig = {
  images: {
    domains: [
      process.env.WORDPRESS_API_URL.match(/(http(?:s)?:\/\/)(.*)/)[2], // Valid WP Image domain.
      "0.gravatar.com",
      "secure.gravatar.com",
      "nextcmsheadless.azurewebsites.net",
      "https://nextcmsheadless.azurewebsites.net/",
    ],
  },
}

module.exports = withPlugins([[withImages]], nextConfig)
