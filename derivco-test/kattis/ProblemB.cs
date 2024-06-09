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

            int[] rowMovement = { -1, 0, 1, 0 }; // clockwise, up, right, down, left
            int[] colMovement = { 0, 1, 0, -1 }; // clockwise, up, right, down, left
        }

        // https://www.geeksforgeeks.org/breadth-first-traversal-bfs-on-a-2d-array/
        public void BFS(char[,] grid, (int, int) startingPos)
        {
            var directions = new (int, int)[]
            {
                (-1, 0), // up - row above, col same
                (1, 0),  // down - row below, col same
                (0, -1), // left - left col, row same
                (0, 1)   // right - right col, row same
            };

            var maxRows = grid.GetLength(0);
            var maxCols = grid.GetLength(1);

            var visited = new bool[maxRows, maxCols];
            
            // Stores indices of the matrix cells
            var queue = new Queue<((int, int) pos, int moves)>();

            // Mark the starting cell as visited and push it into the queue
            queue.Enqueue((startingPos, 0));
            visited[startingPos.Item1, startingPos.Item2] = true;

            // Iterate while the queue is not empty
            while (queue.Count != 0)
            {
                var queueItem = queue.Dequeue();

                // check all surrounding cells
                foreach(var (dirX, dirY) in directions)
                {
                    if (IsValid(grid, visited, dirX, dirY, maxRows, maxCols))
                    {
                        q.Enqueue(new pair(adjx, adjy));
                        vis[adjx, adjy] = true;
                    }
                }
                for (int i = 0; i < 4; i++)
                {
                    int adjx = x + dRow[i];
                    int adjy = y + dCol[i];
                }
            }
        }

        public bool IsValid(char[,] grid, bool[,] visited, int nextX, int nextY, int maxX, int maxY)
        {
            if (visited[nextX, nextY])
                return false;
            if (nextX < 0 || nextX >= maxX || nextY < 0 || nextY >= maxY)
                return false;

        }
    }
}
