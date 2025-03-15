# デスケンEC

趣味の範囲で作成する個人向けECサイトプロジェクトです。Next.jsフロントエンドとGoバックエンドを使用しています。

## プロジェクト構成

- **フロントエンド**: Next.js (TypeScript, Tailwind CSS)
- **バックエンド**: Go (Gin Framework)
- **データベース**: PostgreSQL

## 開発環境のセットアップ

### バックエンドとデータベースの起動
バックエンドとデータベースはDockerで実行します：

```bash
# プロジェクトのルートディレクトリで実行
docker-compose up -d
```

### フロントエンドの起動

フロントエンドはローカル環境で直接実行します：

```bash
cd frontend
npm run dev
```

## アクセス方法

- **フロントエンド**: http://localhost:3000
- **バックエンドAPI**: http://localhost:8080
- **データベース**: localhost:5432
  - ユーザー: postgres
  - パスワード: postgres
  - データベース名: ecsite_db

## 開発環境の特徴

- フロントエンドはローカルで開発（高速な開発体験）
- バックエンドはDockerで分離（環境の一貫性を確保）
- ホットリロード対応（コード変更が即時反映）
