﻿using BusinessLayer.Concrete;
using DataAccessLayer.EntityFramework;
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
    }
}