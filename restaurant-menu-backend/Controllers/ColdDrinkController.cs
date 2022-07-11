using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

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
        [HttpDelete("{id}")]
        public IActionResult DeleteColdDrink(int id)
        {
            var values = coldDrinkManager.TGetByID(id);
            if (values == null)
            {
                return NotFound();
            }
            else
            {
                coldDrinkManager.TDelete(values);
                return Ok();
            }
        }

        [HttpPost("InsertColdDrink")]
        public IActionResult InsertDrink(ColdDrink coldDrink)
        {
            var entity = new ColdDrink()
            {
                ColdDrinkName = coldDrink.ColdDrinkName,
                ColdDrinkImage = coldDrink.ColdDrinkImage,
                ColdDrinkPrice = coldDrink.ColdDrinkPrice,
            };

            coldDrinkManager.TAdd(entity);
            return Ok();
         
        }
    }   
}
