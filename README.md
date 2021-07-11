# js-ts-get-video-duration-frontend

Get the duration in seconds of a video file in the browser.

## Parameters

1. file: The video file.
2. timeoutMs: Optional. The max amount of time in miliseconds to wait for the result, an error will be thrown if the time is exceeded, defaults to 5000. Can be used as safety measure in the rare case that a video won't allow read of metadata at all.

## Examples

### Basic example usage

```js
import { getVideoDuration } from 'your-import-route';

// The HTML input element for selecting video file
const input = document.getElementById('input');

input.onchange = async (event) => {
  try {
    const duration = await getVideoDuration(event.target.files[0]);
    console.log('Duration in seconds: ', duration);
  } catch (error) {
    console.error(error);
  }
};
```

### Setting maximum amount of miliseconds to wait

```js
import { getVideoDuration } from 'your-import-route';

// The HTML input element for selecting video file
const input = document.getElementById('input');

input.onchange = async (event) => {
  try {
    const duration = await getVideoDuration(event.target.files[0], 3000);
    console.log('Duration in seconds: ', duration);
  } catch (error) {
    console.error(error);
  }
};
```

## Licence

MIT
