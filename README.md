# tstempl

**TypeScript 開発テンプレート**  

## 特徴

- Node.js 18+ / **NodeNext + ESM 専用**
- TypeScript（最新）
- tsx（高速実行）
- Vitest（テスト）
- ESLint v10（Flat Config）
- Prettier（コード整形）

## プロジェクト構成

- `src/`
  - `index.ts` — エントリーポイント
  - `sample.ts` — サンプル関数
- `test/`
  - `sample.test.ts` — Vitest のサンプルテスト
- `tsconfig.json` — 開発用 TypeScript 設定
- `tsconfig.build.json` — ビルド用設定（必要に応じて使用）
- `vitest.config.ts` — Vitest 設定
- `eslint.config.js` — ESLint（Flat Config）設定
- `package.json` — スクリプトと依存関係

## スクリプト

- `npm run dev` — tsx で実行
- `npm run test` — Vitest でテスト実行
- `npm run lint` — ESLint（構文チェック）
- `npm run format` — Prettier でコード整形
- `npm run build` — TypeScript でビルド

## 補足

- ESM のため `import` / `export` を使用します。
- Node.js は **18 以上**を推奨します。
- `package.json` の `"type": "module"` により ESM が有効です。
- ESLint は **Flat Config（eslint.config.js）** を採用しています。