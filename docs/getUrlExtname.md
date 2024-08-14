Get extname of a url. The returned string is always lowercase. If the URL don't have extname, this function will return an empty string.

## API

```ts
function getUrlExtname(url: string): string;
```

## Example

```ts
import { getUrlExtname } from "@lilib/utils";

getUrlExtname("http://example.com/pathname");
// => ""

getUrlExtname("http://example.com/pathname.ExtName?search.search#hash.hash");
// => "extname"
```
