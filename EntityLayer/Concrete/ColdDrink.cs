using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class ColdDrink
    {
        [Key]
        public int ColdDrinkID { get; set; }
        public string? ColdDrinkName { get; set; }
        public string? ColdDrinkImage { get; set; }
        public  string? ColdDrinkDetails { get; set; }
        public string? ColdDrinkPrice { get; set; }
    }
}
