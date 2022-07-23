using EntityLayer.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Concrete
{
    public class Context: DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=DESKTOP-LLU1JQO\\SQLEXPRESS;database=RestaurantDB;integrated security=true;");
        }

        public DbSet<ColdDrink>? ColdDrinks { get; set; }
        public DbSet<Dessert>? Desserts { get; set; }
        public DbSet<HotDrink>? HotDrinks { get; set; }
        public DbSet<MainCourse>? MainCourses { get; set; }
        public DbSet<Salad>? Salads { get; set; }
        public DbSet<Soup>? soups { get; set; }
        public DbSet<Category>? Categorys { get; set; }
        public DbSet<Contact>? Contacts { get; set; }
        public DbSet<Message>? Messages  { get; set; }
        public DbSet<TopSeller>? TopSellers  { get; set; }
    }
}
