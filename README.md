# Headless WordPress + NextJS Project

1. A WordPress backend that serves its data via the WP REST API and GraphQL.

2. A NextJS frontend powered by the WP GraphQL API, which supports posts, pages, categories, menus, search, and user sign-in.

3. Also a server-side rendered React frontend using Next.js powered by the WP REST API.

4. Style library using Vanilla-Extract JS, a Typescript preprocessor.

## GET STARTED

First, you need a WordPress site. There are many solutions for WordPress hosting, such as WP Engine and WordPress.com. But I would prefer https://sheephostingbay.com/.

Once the site is ready, you'll need to install the WPGraphQL plugin. It will add GraphQL API to your WordPress site, which we'll use to query the posts. Follow these steps to install it:

Download the WPGraphQL repo as a ZIP archive.
Inside your WordPress admin, go to Plugins and then click Add New.

Click the Upload Plugin button at the top of the page and upload the WPGraphQL plugin.

Second, inside your WordPress admin, go to Posts and start adding new posts:

- We recommend creating at least 2 posts
- Use dummy data for the content
- Pick an author from your WordPress users
- Add a Featured Image. You can download one from Unsplash
- Fill the Excerpt field

When you’re done, make sure to Publish the posts.

Then open .env.local and set WORDPRESS_API_URL to be the URL to your GraphQL endpoint in WordPress. For example: https://myapp.wpengine.com/graphql.

Your .env.local file should look like this:

````WORDPRESS_API_URL=...

# Only required if you want to enable preview mode
# WORDPRESS_AUTH_REFRESH_TOKEN=
# WORDPRESS_PREVIEW_SECRET=```

````

Finally,

npm install and npm run dev

Have fun!
