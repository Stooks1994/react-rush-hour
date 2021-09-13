package main

import (
	"bufio"
	"fmt"
	"log"
	"math/rand"
	"os"
	"strings"
)

var puzzleDb = []string{}

func getRandomPuzzle() Puzzle {
	var puzzle Puzzle

	index := rand.Intn(len(puzzleDb))
	puzzle = parsePuzzleStringToJSON(puzzleDb[index])

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
		puzzleDb = append(puzzleDb, splitString[1])
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}
}
