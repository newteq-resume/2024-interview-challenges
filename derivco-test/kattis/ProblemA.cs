using System;
using System.Collections.Generic;

namespace kattis
{
    internal class ProblemA : IProblem
    {
        public void Run()
        {
            var inputN = Convert.ToInt32(Console.ReadLine());
            var listInputValues = new List<string>();
            for (int i = 0; i < inputN; i++)
            {
                listInputValues.Add(Console.ReadLine()!);
            }

            foreach (var item in listInputValues)
            {
                var inputValues = item.Split(' ');
                if (inputValues?.Length != 3)
                {
                    return;
                }
                var r = Convert.ToInt32(inputValues[0]);
                var e = Convert.ToInt32(inputValues[1]);
                var c = Convert.ToInt32(inputValues[2]);

                var revenueAfterAd = e - c;

                if (r > revenueAfterAd)
                {
                    Console.WriteLine("do not advertise");
                }
                else if (revenueAfterAd > r)
                {
                    Console.WriteLine("advertise");
                }
                else
                {
                    Console.WriteLine("does not matter");
                }
            }
        }
    }
}
