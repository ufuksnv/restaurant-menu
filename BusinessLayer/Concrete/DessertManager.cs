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
            throw new NotImplementedException();
        }

        public void TDelete(Dessert t)
        {
            throw new NotImplementedException();
        }

        public Dessert TGetByID(int id)
        {
            throw new NotImplementedException();
        }

        public List<Dessert> TGetList()
        {
            return _dessertDal.GetList();
        }

        public void TUpdate(Dessert t)
        {
            throw new NotImplementedException();
        }
    }
}
