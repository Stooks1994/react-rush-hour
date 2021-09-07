package main

import (
	"encoding/json"
	"fmt"
	"html"
	"log"
	"net/http"
)

func main() {
	fmt.Print("Server running...")

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
	})

	http.HandleFunc("/getEasyPuzzle", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")

		puzzle := getPuzzleByDifficulty("easy")

		json.NewEncoder(w).Encode(puzzle)
	})

	http.HandleFunc("/getMediumPuzzle", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")

		puzzle := getPuzzleByDifficulty("medium")

		json.NewEncoder(w).Encode(puzzle)
	})

	http.HandleFunc("/getHardPuzzle", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")

		puzzle := getPuzzleByDifficulty("hard")

		json.NewEncoder(w).Encode(puzzle)
	})

	log.Fatal(http.ListenAndServe(":8081", nil))
}
