using BusinessLayer.Abstract;
using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Concrete
{
    public class MainCourseManager: IMainCourseService
    {
        IMainCourseDal _mainCourseDal;

        public MainCourseManager(IMainCourseDal mainCourseDal)
        {
            _mainCourseDal = mainCourseDal;
        }

        public void TAdd(MainCourse t)
        {
            _mainCourseDal.Insert(t);
        }

        public void TDelete(MainCourse t)
        {
            _mainCourseDal.Delete(t);
        }

        public MainCourse TGetByID(int id)
        {
            return _mainCourseDal.GetByID(id);
        }

        public List<MainCourse> TGetList()
        {
            return _mainCourseDal.GetList();
        }

        public void TUpdate(MainCourse t)
        {
            _mainCourseDal.Update(t);  
        }
    }
}
