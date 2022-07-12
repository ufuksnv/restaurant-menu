using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
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
        [HttpDelete("{id}")]
        public IActionResult DeleteSoup(int id)
        {
            var values = soupManager.TGetByID(id);
            if (values == null)
            {
                return NotFound();
            }
            else
            {
                soupManager.TDelete(values);
                return Ok();
            }
        }
        [HttpPost("InsertSoup")]
        public IActionResult InsertSoup(Soup soup)

        {
            var entity = new Soup()
            {
                SoupName = soup.SoupName,
                SoupImage = soup.SoupImage,
                SoupPrice = soup.SoupPrice,
            };

            soupManager.TAdd(entity);
            return Ok();

        }
        [HttpPut("UpdateSoup")]
        public IActionResult UpdateSoup(Soup soup)
        {

            var entity = new Soup()
            {
               SoupID = soup.SoupID,
               SoupName = soup.SoupName,
               SoupImage = soup.SoupImage,
               SoupPrice= soup.SoupPrice,

            };
            soupManager.TUpdate(entity);
            return Ok();
        }
    }
}
