using System;
using System.IO;
using System.Text.Json;
using System.Collections.Generic;


namespace console
{
    class Program
    {
        static void Main(string[] args)
        {

            var accounts = ReadAccounts();

            while (true)
            {
                Console.WriteLine(
                    "Welcome to the Menu." +
                    "\nPlease select a choice:" +
                    "\n1. View accounts." +
                    "\n2. View account by number." +
                    "\n3. Exit"
                );

                int input = Convert.ToInt32(Console.ReadLine());

                switch (input)
                {
                    case 1:
                        ViewAccounts(accounts);
                        break;
                    case 2:
                        Console.WriteLine("Enter id: ");
                        int id = Convert.ToInt32(Console.ReadLine());
                        ViewAccountByNumber(accounts, id);

                        break;
                    case 3:
                        Environment.Exit(0);
                        break;
                    default:
                        Console.WriteLine("Invalid input.");
                        break;
                }
            }
        }

        /*
        * Start by printing headers.
        * Next step is to print each account.
        * Each row in each account is padded with whitespaces in order to not fuck up formatting
        * End with a bottom border
        */
        static void ViewAccounts(IEnumerable<Account> accounts)
        {
            Console.WriteLine("+----------+----------+----------+----------+");
            Console.WriteLine("| Number   | Balance  | Label    | Owner    |");
            foreach (var account in accounts)
            {
                Console.WriteLine("+----------+----------+----------+----------+");
                String numberStr = " ";
                numberStr += account.Number;
                for (int i = 0; i < (9 - account.Number.ToString().Length); i++)
                {
                    numberStr += " ";
                }

                String balanceStr = " ";
                balanceStr += account.Balance;
                for (int i = 0; i < (9 - account.Balance.ToString().Length); i++)
                {
                    balanceStr += " ";
                }

                String labelStr = " ";
                labelStr += account.Label;
                for (int i = 0; i < (9 - account.Label.Length); i++)
                {
                    labelStr += " ";
                }

                String ownerStr = " ";
                ownerStr += account.Owner;
                for (int i = 0; i < (9 - account.Owner.ToString().Length); i++)
                {
                    ownerStr += " ";
                }

                Console.WriteLine("|" + numberStr + "|" + balanceStr + "|" + labelStr + "|" + ownerStr + "|");
            }


            Console.WriteLine("+----------+----------+----------+----------+");

        }

        /*
        * Same idea here but only one account
        */
        static void ViewAccountByNumber(IEnumerable<Account> accounts, int id)
        {
            Account chosenAccount = new Account();
            bool accountFound = false;
            foreach (var account in accounts)
            {
                if (account.Number.Equals(id))
                {
                    chosenAccount = account;
                    accountFound = true;
                    break;
                }
            }

            if (accountFound)
            {
                Console.WriteLine("+----------+----------+----------+----------+");
                Console.WriteLine("| Number   | Balance  | Label    | Owner    |");


                String numberStr = " ";
                numberStr += chosenAccount.Number;
                for (int i = 0; i < (9 - chosenAccount.Number.ToString().Length); i++)
                {
                    numberStr += " ";
                }

                String balanceStr = " ";
                balanceStr += chosenAccount.Balance;
                for (int i = 0; i < (9 - chosenAccount.Balance.ToString().Length); i++)
                {
                    balanceStr += " ";
                }

                String labelStr = " ";
                labelStr += chosenAccount.Label;
                for (int i = 0; i < (9 - chosenAccount.Label.Length); i++)
                {
                    labelStr += " ";
                }

                String ownerStr = " ";
                ownerStr += chosenAccount.Owner;
                for (int i = 0; i < (9 - chosenAccount.Owner.ToString().Length); i++)
                {
                    ownerStr += " ";
                }

                Console.WriteLine("|" + numberStr + "|" + balanceStr + "|" + labelStr + "|" + ownerStr + "|");
                Console.WriteLine("+----------+----------+----------+----------+");
            } else {
                Console.WriteLine("Account not found");
            }
        }


        static IEnumerable<Account> ReadAccounts()
        {
            String file = "../../account.json";

            using (StreamReader reader = new StreamReader(file))
            {
                string data = reader.ReadToEnd();

                var json = JsonSerializer.Deserialize<Account[]>(
                    data,
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    }
                );

                return json;
            }
        }
    }
}
