using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kattis
{
    /*
     * this problem can use the BFS again with different rules
     * 
     * see, for this one, we get the starting point.
     * this will either be 1 or 0, so either decimal or binary (respectively)
     * if we have move along all the 1's or 0's depending on what we are, to the end, then we can move.
     * otherwise, it will simply be "neither" as the output
     * 
     * I tried with a DFS approach too, because it might go to the end "faster" rather than finding the shortest path, but it didn't work
     * So we're just gonna leave it with the original BFS since it's easier to understand
     */

    internal class ProblemC : IProblem
    {
        public void Run()
        {
            // for testing
            //using var reader = new StringReader(testData);
            //Console.SetIn(reader);

            // get the map information
            var inputParams1 = Console.ReadLine().Split(' ');
            var rows = Convert.ToInt32(inputParams1[0]);
            var cols = Convert.ToInt32(inputParams1[1]);
            var inputMap = new List<string>();
            for (int i = 0; i < rows; i++)
            {
                inputMap.Add(Console.ReadLine());
            }
            var gridMap = new char[rows, cols];

            // get all the moves that we need to traverse
            var inputNumberOfMoves = Convert.ToInt32(Console.ReadLine());
            var inputMoves = new List<((int, int), (int, int))>();
            for (int i = 0; i < inputNumberOfMoves; i++)
            {
                var line = Console.ReadLine().Split(' ');
                var numbersInLine = Array.ConvertAll(line, int.Parse); // simplify the list to get all the numbers from the string values
                // these start and end positions need to be subtracted by 1 because they are referencing the grid map as an index of 1 instead of 0
                var startMove = (numbersInLine[0] -1, numbersInLine[1] -1);
                var endMove = (numbersInLine[2] - 1, numbersInLine[3] - 1);
                inputMoves.Add((startMove, endMove));
            }

            for (int r = 0; r < rows; r++)
            {
                for (int c = 0; c < cols; c++)
                {
                    gridMap[r, c] = inputMap[r][c];
                }
            }

            foreach (var (startingPos, endingPos) in inputMoves)
            {
                // we're going to use the canReachEnd var to do some short circuiting where applicable
                var (canReachEnd, who) = CanReachTarget(gridMap, startingPos, endingPos, rows, cols);
                if (!canReachEnd)
                    Console.WriteLine("neither");
                else
                    Console.WriteLine(who);
            }

        }

        public (bool, string) CanReachTarget(char[,] gridMap, (int x, int y) startingPos, (int x, int y) endingPos, int maxRows, int maxCols)
        {
            var directions = new (int, int)[]
            {
                    (-1, 0), // up - row above, col same
                    (1, 0),  // down - row below, col same
                    (0, -1), // left - left col, row same
                    (0, 1)   // right - right col, row same
            };

            var whoAreWe = gridMap[startingPos.x, startingPos.y] == '1' ? "decimal" : "binary";
            var allowedPerson = gridMap[startingPos.x, startingPos.y];
            // we're not moving, so short circuit
            if (startingPos == endingPos)
            {
                return (true, whoAreWe);
            }

            var visited = new bool[maxRows, maxCols];

            // Stores indices of the matrix cells
            var queue = new Queue<(int x, int y)>();

            // Mark the starting cell as visited and push it into the queue
            queue.Enqueue((startingPos.x, startingPos.y));
            visited[startingPos.x, startingPos.y] = true;

            // Iterate while the queue is not empty
            while (queue.Count != 0)
            {
                var (x, y) = queue.Dequeue();

                // the items on the queue are already valid so we just need to check it
                if (x == endingPos.x && y == endingPos.y)
                {
                    return (true, whoAreWe);
                }

                // check all surrounding cells
                foreach (var (dirX, dirY) in directions)
                {
                    var nextX = x + dirX;
                    var nextY = y + dirY;

                    if (nextX < 0 || nextX >= maxRows || nextY < 0 || nextY >= maxCols) { continue; }

                    // end a little earlier than before
                    if (nextX == endingPos.x && nextY == endingPos.y && gridMap[nextX, nextY] == allowedPerson)
                    {
                        return (true, whoAreWe);
                    }

                    if (!visited[nextX, nextY] && gridMap[nextX, nextY] == allowedPerson)
                    {
                        queue.Enqueue((nextX, nextY));
                        visited[nextX, nextY] = true;
                    }
                }
            }

            return (false, string.Empty);
        }
    }
}
