# 調査・要件反映（2026-11-27）

添付手書きメモから確認できた構造：JTB営業による学校案内、学校・使用ID、紙とアプリ、営業サイトの修学旅行・AI探究、エントリー、無料導入編とテスト、本利用の授業・課金。読みにくい単語は断定していません。今回のLPは無料体験への入口を実装し、契約・課金は導入相談に接続します。

既存 `minnano-ai-school` のREADME・SalesGuideから、紙/Web同一ワークシート、先生が扱う範囲を判断、小学校は先生の生成操作、学校のGemini登録・API接続、書籍全体の電子配布なしを確認。既存の学校アカウントや契約データへは変更していません。

公式出典：
- https://book.froebel-kan.co.jp/book/detail/9784577054208 — 全2巻、安藤昇監修、出版社の対象小3〜中学生。LPはプログラムの主対象を小学校高学年・中学校に設定。
- https://www.jtbbwt.com/education/service/solution/jh/in-school-program/teaching-materials/school-trip-note/ — 事前・現地・事後の探究サイクル。既存JTB教材の本文は転載せず活動例を作成。
- https://www.mext.go.jp/a_menu/other/mext_02412.html — Ver.2.0、人の判断、情報検証、学校の方針・利用条件の確認。

書籍の価格・導入校数・教育効果・共同開発の実績・監修者の本LP監修など、確認していない数値や実績を追加していません。ユーザー指定のJTB×フレーベル館のタイアップ構成を表記。
