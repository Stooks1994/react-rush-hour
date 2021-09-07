package main

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

var hardPuzzles = []Puzzle{}
