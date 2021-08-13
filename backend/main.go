package main

import (
	"encoding/json"
	"fmt"
	"html"
	"log"
	"net/http"
)

type Puzzle struct {
	Id         int     `json:"id"`
	Difficulty string  `json:"difficulty"`
	Pieces     []Piece `json:"pieces"`
}

type Piece struct {
	Id            int    `json:"id"`
	X             int    `json:"x"`
	Y             int    `json:"y"`
	H             int    `json:"h"`
	W             int    `json:"w"`
	Orientation   string `json:"orientation"`
	Color         string `json:"color"`
	EscapingPiece bool   `json:"escapingPiece"`
}

func main() {
	fmt.Print("Server running...")

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
	})

	http.HandleFunc("/getEasyPuzzle", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")

		puzzle := Puzzle{
			Id:         0,
			Difficulty: "easy",
			Pieces: []Piece{
				{Id: 0, X: 0, Y: 2, H: 1, W: 2, Orientation: "HORIZONTAL", Color: "red", EscapingPiece: true},
				{Id: 1, X: 2, Y: 0, H: 3, W: 1, Orientation: "VERTICAL", Color: "blue", EscapingPiece: false},
				{Id: 2, X: 0, Y: 3, H: 1, W: 3, Orientation: "HORIZONTAL", Color: "green", EscapingPiece: false},
				{Id: 3, X: 5, Y: 3, H: 3, W: 1, Orientation: "VERTICAL", Color: "teal", EscapingPiece: false},
			},
		}

		json.NewEncoder(w).Encode(puzzle)
	})

	http.HandleFunc("/getMediumPuzzle", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")

		puzzle := Puzzle{
			Id:         1,
			Difficulty: "medium",
			Pieces: []Piece{
				{Id: 0, X: 3, Y: 2, H: 1, W: 2, Orientation: "HORIZONTAL", Color: "red", EscapingPiece: true},
				{Id: 1, X: 2, Y: 1, H: 2, W: 1, Orientation: "VERTICAL", Color: "blue", EscapingPiece: false},
				{Id: 2, X: 2, Y: 3, H: 3, W: 1, Orientation: "VERTICAL", Color: "blue", EscapingPiece: false},
				{Id: 3, X: 3, Y: 3, H: 2, W: 1, Orientation: "VERTICAL", Color: "blue", EscapingPiece: false},
				{Id: 4, X: 5, Y: 0, H: 3, W: 1, Orientation: "VERTICAL", Color: "blue", EscapingPiece: false},
				{Id: 5, X: 0, Y: 0, H: 1, W: 3, Orientation: "HORIZONTAL", Color: "green", EscapingPiece: false},
				{Id: 6, X: 4, Y: 3, H: 1, W: 2, Orientation: "HORIZONTAL", Color: "green", EscapingPiece: false},
				{Id: 7, X: 3, Y: 5, H: 1, W: 2, Orientation: "HORIZONTAL", Color: "green", EscapingPiece: false},
			},
		}

		json.NewEncoder(w).Encode(puzzle)
	})

	http.HandleFunc("/getHardPuzzle", func(w http.ResponseWriter, r *http.Request) {

	})

	log.Fatal(http.ListenAndServe(":8081", nil))
}
