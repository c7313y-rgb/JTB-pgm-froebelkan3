# みんなの相棒！生成AI — 学校向けLP・無料体験

JTBが小中学校へ案内するLPと、教職員向け無料体験を実装。

- LP: 書籍の世界観、授業・修学旅行・地域共創の活用例、4つの登録特典、導入手順、FAQ。
- 実写: Pexelsライセンスの授業・京都動画、地域市場・協働授業写真。撮影者・出典は `public/media/attribution.json`。
- 動画: 本サイトのチラシ体験の操作を実際のブラウザーから収録。AIで人物を生成していません。
- 無料登録: 学校名・校種・都道府県・メール・パスワード。D1にアカウントと体験記録を保存。
- 体験: お願いの組立て、旅行プラン、チラシのテンプレート制作、5問のサーバー採点。
- 記録再開・JSON書出し・印刷/PDF保存・自己削除。外部AIへの送信なし。

## 公開構成

GitHub Pages向け静的LPは既存の `c7313y-rgb/JTB-pgm-froebelkan3` の `minnano-aibo/` に配置。Pagesはアカウントサーバーを実行できないため、無料登録ボタンは同じデザインのSitesホストへ移動します。登録・体験サーバーの一般公開はユーザー承認済みです。登録情報と体験記録は利用者ごとに認証保護されます。

`public/config.js` の serviceOrigin で登録サーバーを管理。お問い合わせ先はユーザー指定により「JTB教育事業部」のみを掲載し、メールアドレスや窓口URLは掲載していません。JTBのCRMへの自動転送・メール配信は実装していません。

本利用教材の原本、書籍本文、認証情報、既存学校のデータは含めません。無料体験のプラン・設問は独自作成。書籍キャラクターは既存の提供素材を継承。

## 開発・検証

Node.js 24 / Vinext / Cloudflare Workers・D1。

```sh
npm ci
npm run db:generate  # スキーマ変更時のみ
node --test tests/api.test.mjs
npx tsc --noEmit
npm run build
npm run dev
```

D1マイグレーションは `drizzle/0000_high_runaways.sql`。公開はSites source helperでsource pushとアーカイブ作成後、save/deployを実行します。`.openai/hosting.json` のproject_idを保持。

## 認証・保存

パスワードはPBKDF2-SHA256/100,000回、ランダムsalt。セッションはランダム256bit、DBにはSHA256だけ保存。CookieはHttpOnly・SameSite=Lax、HTTPSではSecure。8時間で失効。書込みのOrigin確認、SQLバインド、入力サイズ制限、登録・ログインの回数制限、利用者ごとの記録分離を実装。

メール検証・メール送信・パスワード再設定は現在ありません。登録時に明示。外部AI実生成は本利用側の学校承認済みGemini接続に委ね、体験で実生成と誤認させません。

## 確認済み

APIテスト：入力・同意検証、重複登録、秘密情報の非露出、CSRF、未認証拒否、他利用者との分離、サーバー採点、永続化、ログアウト、削除。
ブラウザー：PC1440px、スマートフォン390px、無料登録→導入→旅行→制作→テスト→再読み込み→削除。JavaScriptエラー・横スクロールなし。
