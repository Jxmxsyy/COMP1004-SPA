using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace COMP1004
{
    public class Data
    {
        private static List<User> data = new List<User>();

        public static void init()
        {
            string[] file = System.IO.File.ReadAllText("data.csv").Split("\n");

            foreach(string line in file)
            {
                string[] split = line.Split(',');
                User user = new User();
                user.FirstName = split[0];
                user.LastName = split[1].Replace("/r","");
                data.Add(user);

            }
            
        }

        public static List<User> GetData()
        {
            return data;
        }

        public static void PushData(User newUser)
        {
            data.Add(newUser);
        }
    }
}
