using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace restaurant_menu_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColdDrinkController : ControllerBase
    {
        ColdDrinkManager coldDrinkManager = new ColdDrinkManager(new EfColdDrinkDal());
        [HttpGet]
        public IActionResult GetColdDrink()
        {
            using var c = new Context();
            var values = coldDrinkManager.TGetList();
            return Ok(values);
        }

        [HttpGet("{id}")]
        public IActionResult GetColdDrinkDetails(int id)
        {
            var values = coldDrinkManager.TGetByID(id);
            if (values == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(values);
            }
        }
    }   
}
