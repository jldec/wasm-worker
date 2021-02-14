addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

// Return JSON using query param n.
async function handleRequest(request) {

  // pick up #[wasm_bindgen] exports from ../src/lib.rs
  const { numwords } = wasm_bindgen;

  // `wasm` binding name is auto-generates by wrangler
  await wasm_bindgen(wasm);

  let hello = 'from wasm-worker';
  let url = new URL(request.url);
  let n = url.searchParams.get('n');
  let words;

  try {
    words = numwords(BigInt(n));
  }
  catch (e) {
    words = 'undefined';
  }

  return new Response(JSON.stringify({ hello, n, words }),
    {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    }
  );
}
