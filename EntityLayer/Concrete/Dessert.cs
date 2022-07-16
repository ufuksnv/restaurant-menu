using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Dessert
    {
        [Key]
        public int DessertID { get; set; }
        public string? DessertName { get; set; }
        public string? DessertImage { get; set; }
        public string? DessertDetails { get; set; }
        public string? DessertPrice { get; set; }
    }
}
