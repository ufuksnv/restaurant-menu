using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Category
    {
        [Key]
        public int id { get; set; }
        public string? Tittle { get; set; }
        public string? TittleImage { get; set; }
        public string? ControllerAdress { get; set; }
        public string? Body { get; set; }


    }
}
