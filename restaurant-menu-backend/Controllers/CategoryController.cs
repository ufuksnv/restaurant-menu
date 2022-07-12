using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace restaurant_menu_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        CategoryManager categoryManager = new CategoryManager(new EfCategoryDal());

        [HttpGet]
        public IActionResult GetCategory()
        {
            using var c = new Context();
            var values = categoryManager.TGetList();
            return Ok(values);
        }
        [HttpGet("{id}")]
        public IActionResult GetCategoryDetails(int id)
        {
            var values = categoryManager.TGetByID(id);
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
        public IActionResult DeleteCategory(int id)
        {
            var values = categoryManager.TGetByID(id);
            if (values == null)
            {
                return NotFound();
            }
            else
            {
                categoryManager.TDelete(values);
                return Ok();
            }
        }
        [HttpPost("InsertColdDrink")]
        public IActionResult InsertCategory(Category category)
        {
            var entity = new Category()
            {
                Tittle = category.Tittle,
                TittleImage = category.TittleImage,
                ControllerAdress = category.ControllerAdress,
                Body = category.Body,
            };

            categoryManager.TAdd(entity);
            return Ok();

        }

        [HttpPut("UpdateCategory")]
        public IActionResult UpdateCategory(Category category)
        {

            var entity = new Category()
            {
                id = category.id,  
                Tittle = category.Tittle,
                TittleImage=category.TittleImage,
                ControllerAdress=category.ControllerAdress,
                Body=category.Body,
            };
            categoryManager.TUpdate(entity);
            return Ok();
        }


    }
}
