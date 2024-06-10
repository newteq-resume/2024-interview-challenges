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
     */

    internal class ProblemC : IProblem
    {
        public void Run()
        {
            var testData = @"10 20
11111111111111111111
11000000000000000101
11111111111111110000
11111111111111110000
11000000000000000111
00011111111111111111
00111111111111111111
10000000000000001111
11111111111111111111
11111111111111111111
3
2 3 8 16
8 1 7 3
1 1 10 20
";
            // for testing
            using var reader = new StringReader(testData);
            Console.SetIn(reader);

            var inputParams1 = Console.ReadLine().Split(' ');
            var rows = Convert.ToInt32(inputParams1[0]);
            var cols = Convert.ToInt32(inputParams1[1]);

            var inputMap = new List<string>();
            for (int i = 0; i < rows; i++)
            {
                inputMap.Add(Console.ReadLine());
            }
            var gridMap = new char[rows, cols];
            // the above gives us the map that we need to look at

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
            // now - inputMoves are all the moves that we need to go through

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
                var (canReachEnd, who) = CanReach(gridMap, startingPos, endingPos, rows, cols);
                if (!canReachEnd)
                    Console.WriteLine("neither");
                else
                    Console.WriteLine(who);
            }

        }

        public (bool, string) CanReachTarget(char[,] gridMap, (int x, int y) startingPos, (int x, int y) endingPos)
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

            var maxRows = gridMap.GetLength(0);
            var maxCols = gridMap.GetLength(1);

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

        static (bool, string) CanReach(char[,] map, (int x, int y) startingPos, (int x, int y) endingPos, int rows, int cols)
        {
            if (startingPos.x < 0 || startingPos.x >= rows || startingPos.y < 0 || startingPos.y >= cols ||
                endingPos.x < 0 || endingPos.x >= rows || endingPos.y < 0 || endingPos.y >= cols ||
                map[startingPos.x, startingPos.y] != map[endingPos.x, endingPos.y])
            {
                return (false, string.Empty);
            }

            char targetValue = map[startingPos.x, startingPos.y];
            var whoAreWe = targetValue == '1' ? "decimal" : "binary";
            bool[,] visited = new bool[rows, cols];
            return (DFS(map, startingPos, endingPos, targetValue, visited), whoAreWe);
        }

        static bool DFS(char[,] map, (int x, int y) startingPos, (int x, int y) endingPos, int targetValue, bool[,] visited)
        {
            int rows = map.GetLength(0);
            int cols = map.GetLength(1);

            if (startingPos.x < 0 || startingPos.x >= rows || startingPos.y < 0 || startingPos.y >= cols || visited[startingPos.x, startingPos.y] || map[startingPos.x, startingPos.y] != targetValue)
            {
                return false;
            }

            if (startingPos.x == endingPos.x && startingPos.y == endingPos.y)
            {
                return true;
            }

            visited[startingPos.x, startingPos.y] = true;

            int[] dx = { -1, 1, 0, 0 };
            int[] dy = { 0, 0, -1, 1 };

            for (int i = 0; i < 4; i++)
            {
                int nx = startingPos.x + dx[i];
                int ny = startingPos.y + dy[i];

                if (DFS(map, (nx, ny), endingPos, targetValue, visited))
                {
                    return true;
                }
            }

            return false;
        }
    }
}
