using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Soup
    {
        [Key]
        public int SoupID { get; set; }
        public string? SoupName { get; set; }
        public string? SoupImage { get; set; }
        public string? SoupPrice { get; set; }
    }
}
