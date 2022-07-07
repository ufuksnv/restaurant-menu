using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace restaurant_menu_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SoupController : ControllerBase
    {
        SoupManager soupManager = new SoupManager(new EfSoupDal());
        [HttpGet]
        public IActionResult GetSoup()
        {
            var values = soupManager.TGetList();
            return Ok(values);
        }
        [HttpGet("{id}")]
        public IActionResult GetSoupDetails(int id)
        {
            var values = soupManager.TGetByID(id);
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
