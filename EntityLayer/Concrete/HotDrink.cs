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
        public string? HotDrinkImage { get; set; }
        public string? HotDrinkPrice { get; set; }
    }
}
