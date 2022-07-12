using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
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
        [HttpGet("{id}")]
        public IActionResult GetHotDrinkDetails(int id)
        {
            var values = hotDrinkManager.TGetByID(id);
            if (values == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(values);
            }
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteHotDrink(int id)
        {
            var values = hotDrinkManager.TGetByID(id);
            if (values == null)
            {
                return NotFound();
            }
            else
            {
                hotDrinkManager.TDelete(values);
                return Ok();
            }
        }
        [HttpPost("InsertHotDrink")]
        public IActionResult InsertHotDrink(HotDrink hotDrink)
        {
            var entity = new HotDrink()
            {
                HotDrinkName = hotDrink.HotDrinkName,
                HotDrinkImage = hotDrink.HotDrinkImage,
                HotDrinkPrice = hotDrink.HotDrinkPrice,
            };

            hotDrinkManager.TAdd(entity);
            return Ok();

        }

        [HttpPut("UpdateHotDrink")]
        public IActionResult UpdateHotDrink(HotDrink hotDrink)
        {

            var entity = new HotDrink()
            {
                HotDrinkID = hotDrink.HotDrinkID,
                HotDrinkName = hotDrink.HotDrinkName,
                HotDrinkImage = hotDrink.HotDrinkImage,
                HotDrinkPrice = hotDrink.HotDrinkPrice,
            };
            hotDrinkManager.TUpdate(entity);
            return Ok();
        }
    }
}
