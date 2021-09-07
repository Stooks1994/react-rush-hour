package main

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
