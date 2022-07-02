using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace restaurant_menu_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DessertController : ControllerBase
    {
        DessertManager dessertManager = new DessertManager(new EfDessertDal());
        [HttpGet]
        public IActionResult GetDesset()
        {
           var values = dessertManager.TGetList();
            return Ok(values);
        }
    }
}
