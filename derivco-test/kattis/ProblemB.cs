using System;
using System.Collections.Generic;
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
            var t = Convert.ToInt32(inputParams[0]);
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

            Console.WriteLine($"{startingPos.Item1}, {startingPos.Item2}");
        }
    }
}
