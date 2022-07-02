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
            throw new NotImplementedException();
        }

        public void TDelete(MainCourse t)
        {
            throw new NotImplementedException();
        }

        public MainCourse TGetByID(int id)
        {
            throw new NotImplementedException();
        }

        public List<MainCourse> TGetList()
        {
            return _mainCourseDal.GetList();
        }

        public void TUpdate(MainCourse t)
        {
            throw new NotImplementedException();
        }
    }
}
