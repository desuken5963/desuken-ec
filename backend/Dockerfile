FROM golang:1.22-alpine

WORKDIR /app

# 開発ツールのインストール
RUN go install github.com/cosmtrek/air@v1.49.0 && \
    go install github.com/deepmap/oapi-codegen/v2/cmd/oapi-codegen@v2.0.0

# 初期環境構築を行う
RUN apk add --no-cache gcc musl-dev

# ソースコードのコピー
COPY . .

# 特定バージョンの依存関係をインストール
RUN go mod tidy && \
    go get github.com/gin-contrib/cors@v1.4.0 && \
    go get github.com/gin-gonic/gin@v1.9.0 && \
    go mod tidy

# ディレクトリ作成とoapi-codegen実行
RUN mkdir -p ./internal/handler/api && \
    oapi-codegen -package api -generate types,gin,spec -o ./internal/handler/api/api.gen.go ./docs/openapi.yaml

# ホットリロード用の設定
EXPOSE 8080

CMD ["air", "-c", ".air.toml"] 