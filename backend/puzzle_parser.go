package main

func parsePuzzleStringToJSON(puzzleString string) Puzzle {
	grid := convertPuzzleStringToGrid(puzzleString)
	pieces := getPiecesFromGrid(grid)

	var puzzle = Puzzle{
		Id:         0,
		Difficulty: "easy",
		Pieces:     pieces,
	}

	return puzzle
}

func getPiecesFromGrid(grid [6][6]byte) []Piece {
	var pieces []Piece
	foundLetters := make(map[byte]bool)
	pieceIdCounter := 0

	for i := 0; i < 6; i++ {
		for j := 0; j < 6; j++ {
			if grid[i][j] != 'x' && grid[i][j] != 'o' {
				currLetter := grid[i][j]

				if !foundLetters[currLetter] {
					foundLetters[currLetter] = true

					width := lookRight(currLetter, grid, i, j)
					height := lookDown(currLetter, grid, i, j)
					orientation := "VERTICAL"
					escapingPiece := false
					color := "BLUE"

					if height == 1 {
						orientation = "HORIZONTAL"
					}

					if currLetter == 'A' {
						escapingPiece = true
						color = "RED"
					}

					currPiece := Piece{
						Id:            pieceIdCounter,
						X:             j,
						Y:             i,
						H:             height,
						W:             width,
						Orientation:   orientation,
						Color:         color,
						EscapingPiece: escapingPiece,
					}

					pieces = append(pieces, currPiece)
					pieceIdCounter++
				}
			} else if grid[i][j] == 'x' {
				currPiece := Piece{
					Id:            pieceIdCounter,
					X:             j,
					Y:             i,
					H:             1,
					W:             1,
					Orientation:   "HORIZONTAL",
					Color:         "blue",
					EscapingPiece: false,
				}

				pieces = append(pieces, currPiece)
				pieceIdCounter++
			}
		}
	}

	return pieces
}

func lookDown(currLetter byte, grid [6][6]byte, x int, y int) int {
	width := 0

	for {
		if x >= 6 || grid[x][y] != currLetter {
			break
		}

		width++
		x++
	}

	return width
}

func lookRight(currLetter byte, grid [6][6]byte, x int, y int) int {
	height := 0

	for {
		if y >= 6 || grid[x][y] != currLetter {
			break
		}

		height++
		y++
	}

	return height
}

func convertPuzzleStringToGrid(puzzle string) [6][6]byte {
	var byteString = []byte(puzzle)
	var puzzleGrid [6][6]byte

	index := 0

	for i := 0; i < 6; i++ {
		for j := 0; j < 6; j++ {
			puzzleGrid[i][j] = byteString[index]
			index++
		}
	}

	return puzzleGrid
}
