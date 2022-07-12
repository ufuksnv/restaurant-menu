using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
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

        [HttpGet("{id}")]
        public IActionResult GetDessertDetails(int id)
        {
            var values = dessertManager.TGetByID(id);
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
        public IActionResult DeleteDessert(int id)
        {
            var values = dessertManager.TGetByID(id);
            if (values == null)
            {
                return NotFound();
            }
            else
            {
                dessertManager.TDelete(values);
                return Ok();
            }
        }
        [HttpPost("InsertDessert")]
        public IActionResult InsertDessert(Dessert dessert)
        {
            var entity = new Dessert()
            {
                DessertName = dessert.DessertName,
                DessertImage = dessert.DessertImage,
                DessertPrice = dessert.DessertPrice
            };

            dessertManager.TAdd(entity);
            return Ok();

        }

        [HttpPut("UpdateDessert")]
        public IActionResult UpdateDessert(Dessert dessert)
        {

            var entity = new Dessert()
            {
                DessertID = dessert.DessertID,
                DessertName=dessert.DessertName,
                DessertImage=dessert.DessertImage,
                DessertPrice=dessert.DessertPrice
            };
            dessertManager.TUpdate(entity);
            return Ok();
        }

    }
}
