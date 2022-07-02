using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace restaurant_menu_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaladController : ControllerBase
    {
        SaladManager saladManager = new SaladManager(new EfSaladDal());
        [HttpGet]
        public IActionResult GetSalad()
        {
            var values = saladManager.TGetList();
            return Ok(values);
        }
    }
}
