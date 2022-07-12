using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace restaurant_menu_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MainCourseController : ControllerBase
    {
        MainCourseManager mainCourseManager = new MainCourseManager(new EfMainCourseDal());
        [HttpGet]
        public IActionResult GetMainCourse()
        {
            var values = mainCourseManager.TGetList();
            return Ok(values);
        }
        [HttpGet("{id}")]
        public IActionResult MainCourseDetails(int id)
        {
            var values = mainCourseManager.TGetByID(id);
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
        public IActionResult DeleteMainCourse(int id)
        {
            var values = mainCourseManager.TGetByID(id);
            if (values == null)
            {
                return NotFound();
            }
            else
            {
                mainCourseManager.TDelete(values);
                return Ok();
            }
        }

        [HttpPost("InsertMainCourse")]
        public IActionResult InsertMainCourse(MainCourse mainCourse)
        {
            var entity = new MainCourse()
            {
                MainCourseName = mainCourse.MainCourseName,
                MainCourseImage = mainCourse.MainCourseImage,
                MainCoursePrice = mainCourse.MainCoursePrice,
            };

            mainCourseManager.TAdd(entity);
            return Ok();

        }

        [HttpPut("UpdateMainCourse")]
        public IActionResult UpdateMainCourse(MainCourse mainCourse)
        {

            var entity = new MainCourse()
            {
              MainCourseID = mainCourse.MainCourseID,
              MainCourseName=mainCourse.MainCourseName,
              MainCourseImage=mainCourse.MainCourseImage,
              MainCoursePrice=mainCourse.MainCoursePrice,
            };
            mainCourseManager.TUpdate(entity);
            return Ok();
        }

    }
}
