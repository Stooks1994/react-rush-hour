package main

import (
	"bufio"
	"fmt"
	"log"
	"math/rand"
	"os"
	"strings"
)

func getPuzzleByDifficulty(difficulty string) Puzzle {
	puzzle := easyPuzzles[0]

	switch difficulty {
	case "easy":
		puzzle = easyPuzzles[0]
	case "medium":
		puzzle = mediumPuzzles[0]
	case "hard":
		puzzle = easyPuzzles[0]
	}

	return puzzle
}

func getRandomPuzzleFromStore() Puzzle {
	index := rand.Intn(len(dbPuzzleStrings))
	puzzle := parsePuzzleStringToJSON(dbPuzzleStrings[index])

	return puzzle
}

func populateDbPuzzlesFromFile() {
	fmt.Println("Populating puzzle store...")

	file, err := os.Open("./rush1000.txt")

	if err != nil {
		log.Fatal(err)
	}

	defer file.Close()

	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		splitString := strings.Split(scanner.Text(), " ")
		dbPuzzleStrings = append(dbPuzzleStrings, splitString[1])
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}
}

var easyPuzzles = []Puzzle{
	{
		Id:         0,
		Difficulty: "easy",
		Pieces: []Piece{
			{Id: 0, X: 0, Y: 2, H: 1, W: 2, Orientation: "HORIZONTAL", Color: "red", EscapingPiece: true},
			{Id: 1, X: 2, Y: 0, H: 3, W: 1, Orientation: "VERTICAL", Color: "blue", EscapingPiece: false},
			{Id: 2, X: 0, Y: 3, H: 1, W: 3, Orientation: "HORIZONTAL", Color: "green", EscapingPiece: false},
			{Id: 3, X: 5, Y: 3, H: 3, W: 1, Orientation: "VERTICAL", Color: "teal", EscapingPiece: false},
		},
	},
}

var mediumPuzzles = []Puzzle{
	{
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
	},
}

var dbPuzzleStrings = []string{}
