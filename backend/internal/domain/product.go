package domain

import "time"

// Product はECサイトの商品を表すドメインモデルです
type Product struct {
	ID          int64     `json:"id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Price       float64   `json:"price"`
	Stock       int       `json:"stock"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

// NewProduct は新しい商品インスタンスを作成します
func NewProduct(name, description string, price float64, stock int) *Product {
	now := time.Now()
	return &Product{
		Name:        name,
		Description: description,
		Price:       price,
		Stock:       stock,
		CreatedAt:   now,
		UpdatedAt:   now,
	}
}
