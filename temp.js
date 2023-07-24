function resolveAfterNSeconds(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(url + 'resolved');
    }, 1000 * url);
  });
}

export const res = await resolveAfterNSeconds(1)