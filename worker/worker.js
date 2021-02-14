addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { numwords } = wasm_bindgen;
  await wasm_bindgen(WASM_WORKER_BINDING);

  let hello = 'from wasm-worker';
  let url = new URL(request.url);
  let n = url.searchParams.get('n');
  let words;

  try {
    let num = BigInt(n);
    words = numwords(num);
  }
  catch (e) {
    words = 'undefined'
  }

  return new Response(JSON.stringify({ hello, n, words }),
    {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    }
  );
}
