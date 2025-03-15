FROM golang:1.22-alpine

WORKDIR /app

# 開発ツールのインストール (バージョンを指定して互換性問題を解決)
RUN go install github.com/cosmtrek/air@v1.49.0

# 初期環境構築を行う
RUN apk add --no-cache gcc musl-dev

# ソースコードのコピー
COPY . .

# 特定バージョンの依存関係をインストール
RUN go mod tidy && \
    go get github.com/gin-contrib/cors@v1.4.0 && \
    go get github.com/gin-gonic/gin@v1.9.0 && \
    go mod tidy

# ホットリロード用の設定
EXPOSE 8080

CMD ["air", "-c", ".air.toml"] 