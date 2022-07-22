using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Salad
    {
        public int SaladID { get; set; }
        public string? SaladName { get; set; }
        public string? SaladImage { get; set; }
        public string? SaladDetails { get; set; }
        public bool MilkAllert { get; set; }
        public bool HazelnutAllert { get; set; }
        public bool WheatAllert { get; set; }
        public string? SaladPrice { get; set; }

    }
}
