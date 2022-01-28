# Issues

1. When going through pagination, the last page needs to be restricted.

  The Spotify API still sends a `next` value even when there are technically no more tracks to show under certain conditions.

  This means the last page has to be handled in code via value checking the `items` that are returned.

2. Handle a 401 when the access token has expired.

  An axios interceptor would be sufficient to take care of this on the response. We would need to check the status code on each response for this.
