# Todo

## Security

1. Exposed keys

  The client key and redirect URI are available for all to see when carrying out the authentication process.

  An initial strategy I thought of to resolve this would be to call some from of edge function that would return the credentials from a generic source as long as the origin was correct.

  The other option in an SSR configuration would be to use private keys and have these passed into in the case of Nuxt the privateRuntimeConfig. This would be accessible from data fetching methods that are server specific, thus returning the credentials down as props post-SSR.

## Nice-to-haves

1. Animations

  Page update animations would help with the flickering effect experienced from the image loading.

2. A rollover of page component for a track

  There is much more track information available, so a rollover for the tracks to show the artwork (using the higher resolution image) and more details would be cool.

  Alternatively, this could be a separate page.

## Improvements

1. Caching of track & artist page data

  After getting the tracks and artists for a particular page, the content would be better to cache and read from instead of doing an API request on each page change.

2. Sidebar

  The sidebar on desktop would be better off either as a separate hidden menu to focus more on the tracks in question or as it is expected it could get very long, a scrollbar could be implemented.

3. Mobile Sidebar

  The mobile sidebar could become unwieldly, even more so than on the desktop side. To alleviate this it would be better to have it hidden in a slide away drawer.

  We would lose the ability to know what artist we were currently viewing though so more UI would be needed to display this.

4. Refactor

  This is quite broad. I'd consider this application to be at an MVP stage.

  To improve there would need to be better separation of concerns for the stores. They share data (via the allowed methods), but the actions that are carried out would be better directed to actions that then take place within the requried store.

  A fair amount of the Tailwind classes can be shrunk down into css components.

  Further documentation on methods, including argument and return values.

  A general tidy up of the code order and further readability concerns should be handled as well.

5. Type/Interface Refactor

  This follows similarly along to the last, but is specfic for types and interfaces.

  These would benefit from separation as there is a lot of sharing between components and stores.