package main

import (
	"encoding/json"
	"fmt"
	"html"
	"log"
	"net/http"
)

func main() {
	populateDbPuzzlesFromFile()

	fmt.Print("Server running...\n")

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
	})

	http.HandleFunc("/api/getPuzzle", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")

		puzzle := getRandomPuzzle()

		json.NewEncoder(w).Encode(puzzle)
	})

	log.Fatal(http.ListenAndServe(":8081", nil))
}
