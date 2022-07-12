using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
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
        [HttpGet("{id}")]
        public IActionResult GetSaladDetails(int id)
        {
            var values = saladManager.TGetByID(id);
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
        public IActionResult DeleteSalad(int id)
        {
            var values = saladManager.TGetByID(id);
            if (values == null)
            {
                return NotFound();
            }
            else
            {
                saladManager.TDelete(values);
                return Ok();
            }
        }

        [HttpPost("InsertSalad")]
        public IActionResult InsertSalad(Salad salad)
         
        {
            var entity = new Salad()
            {
               SaladName = salad.SaladName,
               SaladImage = salad.SaladImage,
               SaladPrice = salad.SaladPrice,
            };

            saladManager.TAdd(entity);
            return Ok();

        }
        [HttpPut("UpdateSalad")]
        public IActionResult UpdateSalad(Salad salad)
        {

            var entity = new Salad()
            {
                SaladID = salad.SaladID,
                SaladName=salad.SaladName,
                SaladImage=salad.SaladImage,
                SaladPrice=salad.SaladPrice,
            };
            saladManager.TUpdate(entity);
            return Ok();
        }
    }
}
