        let board = ["", "", "", "", "", "", "", "", ""];
        let currentPlayer = "X";
        let gameActive = true;

        const winningConditions = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8],   
            [2, 4, 6]  
        ];

        function makeMove(cell, index) {
            if (board[index] === "" && gameActive) {
                board[index] = currentPlayer;
                cell.textContent = currentPlayer;
                checkWinner();
                currentPlayer = currentPlayer === "X" ? "O" : "X"; 
            }
        }

        function checkWinner() {
            let roundWon = false;

            for (let i = 0; i < winningConditions.length; i++) {
                const [a, b, c] = winningConditions[i];
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    roundWon = true;
                    break;
                }
            }

            if (roundWon) {
                document.getElementById("message").textContent = `Player ${currentPlayer} profit!`;
                gameActive = false;
                return;
            }

            if (!board.includes("")) {
                document.getElementById("message").textContent = "tied!";
                gameActive = false;
                return;
            }
        }

        function resetGame() {
            board = ["", "", "", "", "", "", "", "", ""];
            currentPlayer = "X";
            gameActive = true;
            document.querySelectorAll(".cell").forEach(cell => (cell.textContent = ""));
            document.getElementById("message").textContent = "";
        }
