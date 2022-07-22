using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class HotDrink
    {
        [Key]
        public int HotDrinkID { get; set; }
        public string? HotDrinkName { get; set; }
        public string? HotDrinkImage { get; set; }
        public string? HotDrinkDetails { get; set; }
        public bool MilkAllert { get; set; }
        public bool HazelnutAllert { get; set; }
        public bool WheatAllert { get; set; }
        public string? HotDrinkPrice { get; set; }
    }
}
