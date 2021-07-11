/**
 * Get the duration in seconds of a video file.
 * @param {File} file - The video file.
 * @param {number} timeoutMs - Optional. The max amount of time in miliseconds to wait for the result, an error will be thrown if the time is exceeded, defaults to 5000. Can be used as safety measure in the rare case that a video won't allow read of metadata at all.
 * @return {Promise<number>} The duration in seconds of the video.
 */
export const getVideoDuration = (
  file: File,
  timeoutMs = 5000
): Promise<number> => {
  return new Promise((resolve, reject) => {
    file.type.split('/')[0] !== 'video' &&
      reject('The provided file must be a video!');

    const timeout = setTimeout(() => {
      reject(
        'Could not read the video metadata within the provided time limit!'
      );
    }, timeoutMs);

    const video = document.createElement('video');
    video.onloadedmetadata = () => {
      clearTimeout(timeout);
      resolve(video.duration);
    };
    video.src = URL.createObjectURL(file);
  });
};
