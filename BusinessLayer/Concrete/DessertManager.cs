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
    public class DessertManager : IDessertService
    {
        IDessertDal _dessertDal;

        public DessertManager(IDessertDal dessertDal)
        {
            _dessertDal = dessertDal;
        }

        public void TAdd(Dessert t)
        {
            _dessertDal.Insert(t);
        }

        public void TDelete(Dessert t)
        {
            _dessertDal.Delete(t);
        }

        public Dessert TGetByID(int id)
        {
            return _dessertDal.GetByID(id);
        }

        public List<Dessert> TGetList()
        {
            return _dessertDal.GetList();
        }

        public void TUpdate(Dessert t)
        {
            _dessertDal.Update(t);
        }
    }
}
