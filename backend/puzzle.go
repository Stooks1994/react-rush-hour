package main

type Puzzle struct {
	Id         int     `json:"id"`
	Difficulty string  `json:"difficulty"`
	Pieces     []Piece `json:"pieces"`
}
