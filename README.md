# Wasm Worker

## Required tools

- [Rust](https://jldec.me/forays-from-node-to-rust#first-impressions)
- [Wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update): `cargo install wrangler`
- [`wasm-pack`](https://rustwasm.github.io/docs/wasm-pack/): `cargo install wasm-pack`

## Dependencies

- [shortscale]
- [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) for communicating between WebAssembly and JavaScript.

## Build

`wasm-pack build`

## Template

This repo was originally created using `wrangler generate` from [rustwasm-worker-template](https://github.com/cloudflare/rustwasm-worker-template/commit/72d390bf22983d43a1da3681faa093874fa32837). Subsequently all optional libraries and tests were removed.
