using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kattis
{
    internal class ProblemB : IProblem
    {
        public void Run()
        {
            var inputParams = Console.ReadLine().Split(' ');
            var maxNumberOfMoves = Convert.ToInt32(inputParams[0]);
            var rows = Convert.ToInt32(inputParams[1]);
            var cols = Convert.ToInt32(inputParams[2]);

            var grid = new char[rows, cols];

            var lines = new List<string>();
            for (var i = 0; i < rows; i++)
            {
                lines.Add(Console.ReadLine());
            }

            var currentRow = 0;
            var currentCol = 0;
            Tuple<int, int> startingPos = null;
            foreach (var line in lines)
            {
                foreach (var item in line)
                {
                    if (item == 'S')
                    {
                        startingPos = new(currentRow, currentCol);
                    }
                    grid[currentRow, currentCol] = item;
                    currentCol++;
                }
                currentRow++;
                currentCol = 0;
            }

            if (startingPos == null)
            {
                return;
            }

            if (IsBorder(startingPos.Item1, startingPos.Item2, rows, cols))
            {
                // already at border, so out already
                Console.WriteLine("0");
                return;
            }

            var a = CanReachEnd(grid, (startingPos.Item1, startingPos.Item2), maxNumberOfMoves);
            if (!a.Item1)
                Console.WriteLine("NOT POSSIBLE");
            else
                Console.WriteLine(a.Item2);
        }

        // https://www.geeksforgeeks.org/breadth-first-traversal-bfs-on-a-2d-array/
        public (bool, int) CanReachEnd(char[,] grid, (int x, int y) startingPos, int maxMoves)
        {
            var directions = new (char, int, int)[]
            {
                ('D', -1, 0), // up - row above, col same
                ('U', 1, 0),  // down - row below, col same
                ('R', 0, -1), // left - left col, row same
                ('L', 0, 1)   // right - right col, row same
            };
            //var directionAllowedMap = new Dictionary<char, (int, int)>();
            //directionAllowedMap.Add('U', directions[1]);
            //directionAllowedMap.Add('L', directions[3]);
            //directionAllowedMap.Add('D', directions[0]);
            //directionAllowedMap.Add('R', directions[2]);

            var maxRows = grid.GetLength(0);
            var maxCols = grid.GetLength(1);

            var visited = new bool[maxRows, maxCols];

            // Stores indices of the matrix cells
            var queue = new Queue<QueueMovement>();

            // Mark the starting cell as visited and push it into the queue
            queue.Enqueue(new QueueMovement
            {
                XPos = startingPos.x,
                YPos = startingPos.y,
                Moves = 0
            });
            visited[startingPos.x, startingPos.y] = true;

            // Iterate while the queue is not empty
            while (queue.Count != 0)
            {
                var queueItem = queue.Dequeue();

                // check all surrounding cells
                foreach (var (allowedDirection, dirX, dirY) in directions)
                {
                    var nextX = queueItem.XPos + dirX;
                    var nextY = queueItem.YPos + dirY;
                    var nextMove = queueItem.Moves + 1;
                    if (IsValid(grid, visited, allowedDirection, nextX, nextY, maxRows, maxCols))
                    {
                        if (IsBorder(nextX, nextY, maxRows, maxCols) && nextMove <= maxMoves)
                        {
                            return (true, nextMove);
                        }
                        queue.Enqueue(new QueueMovement
                        {
                            XPos = nextX,
                            YPos = nextY,
                            Moves = nextMove
                        });

                        visited[nextX, nextY] = true;
                    }
                }
            }

            return (false, 0);
        }

        public bool IsValid(char[,] grid, bool[,] visited, char allowedDirection, int nextX, int nextY, int maxX, int maxY)
        {
            if (nextX < 0 || nextX >= maxX || nextY < 0 || nextY >= maxY)
                return false;
            if (visited[nextX, nextY])
                return false;
            if (grid[nextX, nextY] == '0')
                return true;
            if (grid[nextX, nextY] == allowedDirection)
                return true;

            return false;
        }

        public bool IsBorder(int x, int y, int maxRows, int maxCols)
        {
            return x == 0 || x == maxRows -1 || y == 0 || y == maxCols - 1;
        }
    }

    internal class QueueMovement
    {
        public int XPos { get; set; }
        public int YPos { get; set; }
        public int Moves { get; set; }
    }
}
