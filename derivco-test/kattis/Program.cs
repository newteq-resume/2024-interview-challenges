// Problem A - FIRST TRY
//var testCases = 3;
//var tests = new List<string>();
//tests.Add("0 100 70");
//tests.Add("100 130 30");
//tests.Add("-100 -70 40");

//foreach (var test in tests)
//{
//    var items = test.Split(' ');
//    var r = Convert.ToInt32(items[0]);
//    var e = Convert.ToInt32(items[1]);
//    var c = Convert.ToInt32(items[2]);

//    var noAd = r;
//    var ad = e - c;

//    if (noAd > ad)
//    {
//        Console.WriteLine("do not advertise");
//    }
//    else if (ad > noAd)
//    {
//        Console.WriteLine("advertise");
//    }
//    else
//    {
//        Console.WriteLine("does not matter");
//    }
//}

// SECOND TRY

//using System;
//using System.Collections.Generic;

//var inputN = Convert.ToInt32(Console.ReadLine());
//var listInputValues = new List<string>();
//for (int i = 0; i < inputN; i++)
//{
//    listInputValues.Add(Console.ReadLine()!);
//}

//foreach (var item in listInputValues)
//{
//    var inputValues = item.Split(' ');
//    if (inputValues?.Length != 3)
//    {
//        return;
//    }
//    var r = Convert.ToInt32(inputValues[0]);
//    var e = Convert.ToInt32(inputValues[1]);
//    var c = Convert.ToInt32(inputValues[2]);

//    var revenueAfterAd = e - c;

//    if (r > revenueAfterAd)
//    {
//        Console.WriteLine("do not advertise");
//    }
//    else if (revenueAfterAd > r)
//    {
//        Console.WriteLine("advertise");
//    }
//    else
//    {
//        Console.WriteLine("does not matter");
//    }
//}

