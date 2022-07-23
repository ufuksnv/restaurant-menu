using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace restaurant_menu_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TopSellerController : ControllerBase
    {
        TopSellerManager topSellerManager = new TopSellerManager(new EfTopSellerDal());
        [HttpGet]
        public IActionResult GetTopSeller()
        {
            using var c = new Context();
            var values = topSellerManager.TGetList();
            return Ok(values);
        }
    }
}
