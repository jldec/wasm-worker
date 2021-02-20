# wasm-worker

Demo project to accompany the blogpost [Calling Rust from a Cloudflare Worker](https://jldec.me/calling-rust-from-a-cloudflare-worker).

### Required tools

- [Rust](https://jldec.me/forays-from-node-to-rust#first-impressions)
- [Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/install-update)


### Configure and build

[Login](https://developers.cloudflare.com/workers/cli-wrangler/commands#login) to your Cloudflare account, and edit [wrangler.toml](wrangler.toml) to set your own `account_id`. Values for `zone_id` and `route` are only needed if you want to deploy on your own domain.

Build and run locally
```sh
wrangler dev
```

Build and publish to cloudflare
```
wrangler publish
```

### Dependencies

- [shortscale](https://github.com/jldec/shortscale-rs)
- [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) for communicating between WebAssembly and JavaScript

### Template

This repo was originally created using `wrangler generate wasm-worker -t rust` which copied [rustwasm-worker-template](https://github.com/cloudflare/rustwasm-worker-template/tree/72d390bf22983d43a1da3681faa093874fa32837). 

- Removed unused files: `.appveyor.yml`, `.travis.yml`, `.cargo-ok`
- Removed `worker/metadata_wasm.json` - no longer used by wrangler
- Removed optional libraries `console_error_panic_hook`, `wee_alloc`, and `cfg-if`
- Updated version of `wasm-bindgen`
- Filled in `description`, `license`, and `repository` in `Cargo.toml`
- Added `Cargo.lock` to `.gitignore`
- Rewrote the README

