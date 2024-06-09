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

            using var reader = new StringReader(testData);
            Console.SetIn(reader);
            var a = Console.ReadLine();
            Console.WriteLine(a);
            //    var inputParams1 = Console.ReadLine().Split(' ');
            //    var rows = Convert.ToInt32(inputParams1[0]);
            //    var cols = Convert.ToInt32(inputParams1[1]);

            //    var inputMap = new List<string>();
            //    for(int i = 0; i < rows; i++)
            //    {
            //        inputMap.Add(Console.ReadLine());
            //    }
            //    var gridMap = new char[rows, cols];
            //    // the above gives us the map that we need to look at

            //    var inputNumberOfMoves = Convert.ToInt32(Console.ReadLine());
            //    var inputMoves = new List<((int,int), (int, int))>();
            //    for (int i = 0; i < inputNumberOfMoves; i++)
            //    {
            //        var line = Console.ReadLine().Split(' ');
            //        var numbersInLine = new List<int>();
            //        foreach(var item in line)
            //        {
            //            numbersInLine.Add(Convert.ToInt32(item));
            //        }
            //        var startMove = (numbersInLine[0], numbersInLine[1]);
            //        var endMove = (numbersInLine[2], numbersInLine[3]);
            //        inputMoves.Add((startMove, endMove));
            //    }
            //    // now - inputMoves are all the moves that we need to go through

            //    var currentRow = 0;
            //    var currentCol = 0;
            //    Tuple<int, int> startingPos = null;
            //    Tuple<int, int> endingPos = null;
            //    foreach (var line in inputMap)
            //    {
            //        foreach (var item in line)
            //        {
            //            gridMap[currentRow, currentCol] = item;
            //            currentCol++;
            //        }
            //        currentRow++;
            //        currentCol = 0;
            //    }

            //    var (canReadEnd, numberOfMovesToEnd) = CanReachTarget(grid, (startingPos.Item1, startingPos.Item2), maxNumberOfMoves);
            //    if (!canReadEnd)
            //        Console.WriteLine("NOT POSSIBLE");
            //    else
            //        Console.WriteLine(numberOfMovesToEnd);

            //}

            //// https://www.geeksforgeeks.org/breadth-first-traversal-bfs-on-a-2d-array/
            //public (bool, int) CanReachEnd(char[,] grid, (int x, int y) startingPos, int maxMoves)
            //{
            //    var directions = new (char, int, int)[]
            //    {
            //        ('D', -1, 0), // up - row above, col same
            //        ('U', 1, 0),  // down - row below, col same
            //        ('R', 0, -1), // left - left col, row same
            //        ('L', 0, 1)   // right - right col, row same
            //    };

            //    var maxRows = grid.GetLength(0);
            //    var maxCols = grid.GetLength(1);

            //    var visited = new bool[maxRows, maxCols];

            //    // Stores indices of the matrix cells
            //    var queue = new Queue<QueueMovement>();

            //    // Mark the starting cell as visited and push it into the queue
            //    queue.Enqueue(new QueueMovement
            //    {
            //        XPos = startingPos.x,
            //        YPos = startingPos.y,
            //        Moves = 0
            //    });
            //    visited[startingPos.x, startingPos.y] = true;

            //    // Iterate while the queue is not empty
            //    while (queue.Count != 0)
            //    {
            //        var queueItem = queue.Dequeue();

            //        // check all surrounding cells
            //        foreach (var (allowedDirection, dirX, dirY) in directions)
            //        {
            //            var nextX = queueItem.XPos + dirX;
            //            var nextY = queueItem.YPos + dirY;
            //            var nextMoveCount = queueItem.Moves + 1;
            //            if (IsValid(grid, visited, allowedDirection, nextX, nextY, maxRows, maxCols))
            //            {
            //                if (IsBorder(nextX, nextY, maxRows, maxCols) && nextMoveCount <= maxMoves)
            //                {
            //                    return (true, nextMoveCount);
            //                }
            //                queue.Enqueue(new QueueMovement
            //                {
            //                    XPos = nextX,
            //                    YPos = nextY,
            //                    Moves = nextMoveCount
            //                });

            //                visited[nextX, nextY] = true;
            //            }
            //        }
            //    }

            //    return (false, -1);
            //}

            //public bool IsValid(char[,] grid, bool[,] visited, char allowedDirection, int nextX, int nextY, int maxX, int maxY)
            //{
            //    if (nextX < 0 || nextX >= maxX || nextY < 0 || nextY >= maxY)
            //        return false;
            //    if (visited[nextX, nextY])
            //        return false;
            //    if (grid[nextX, nextY] == '0')
            //        return true;
            //    if (grid[nextX, nextY] == allowedDirection)
            //        return true;

            //    return false;
            //}

            //public bool IsBorder(int x, int y, int maxRows, int maxCols)
            //{
            //    return x == 0 || x == maxRows - 1 || y == 0 || y == maxCols - 1;
            //}
        }
    }
}
