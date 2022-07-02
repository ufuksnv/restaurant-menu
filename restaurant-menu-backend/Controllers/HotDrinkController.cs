using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace restaurant_menu_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotDrinkController : ControllerBase
    {
        HotDrinkManager hotDrinkManager = new HotDrinkManager(new EfHotDrinkDal());
        [HttpGet]
        public IActionResult GetHotDrink()
        {
            var values = hotDrinkManager.TGetList();
            return Ok(values);
        }
    }
}
