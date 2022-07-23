using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Message
    {
        [Key]
        public  int Id { get; set; }
        public string? firstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public int Phone { get; set; }
        public string? CustomerMessage { get; set; }
    }
}
