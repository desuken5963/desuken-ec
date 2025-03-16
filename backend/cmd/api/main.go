package main

import (
	"desuken-ec/backend/internal/handler"
	"desuken-ec/backend/internal/repository"
	"desuken-ec/backend/internal/usecase"
	"log"
)

func main() {
	log.Println("バックエンドサーバーを起動します...")

	// リポジトリの初期化
	repo := repository.NewPostgresRepository()

	// ユースケースの初期化
	productUsecase := usecase.NewProductUsecase(repo)

	// ルーターの設定
	router := handler.NewRouter(productUsecase)

	// サーバーの起動
	log.Println("APIサーバーを起動します: localhost:8080")
	if err := router.Run(":8080"); err != nil {
		log.Fatalf("サーバー起動エラー: %v", err)
	}
}
