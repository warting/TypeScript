// @noTypesAndSymbols: true

// @Filename: /node_modules/@types/foo/package.json
{
  "name": "@types/foo",
  "version": "1.0.0",
  "exports": {
    ".": {
      "import": "./index.d.mts",
      "require": "./index.d.cts"
    }
  }
}

// @Filename: /node_modules/@types/foo/index.d.mts
export {};
declare global {
  const MODULE: any;
}

//@Filename: /node_modules/@types/foo/index.d.cts
export {};
declare global {
  const SCRIPT: any;
}

// @Filename: /tsconfig.json
{
  "compilerOptions": {
    "module": "esnext",
    "moduleResolution": "bundler",
    "noEmit": true,
    "types": []
  }
}

// @Filename: /app.ts
/// <reference types="foo" />
MODULE; // ok
SCRIPT; // error
