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
    public class ColdDrinkManager: IColdDrinkService
    {
        IColdDrinkDal _coldDrinkDal;

        public ColdDrinkManager(IColdDrinkDal coldDrinkDal)
        {
            _coldDrinkDal = coldDrinkDal;
        }

        public void TAdd(ColdDrink t)
        {
            _coldDrinkDal.Insert(t);
        }

        public void TDelete(ColdDrink t)
        {
            _coldDrinkDal.Delete(t);
        }

        public ColdDrink TGetByID(int id)
        {
            return _coldDrinkDal.GetByID(id);
        }

        public List<ColdDrink> TGetList()
        {
            return _coldDrinkDal.GetList();
        }

        public void TUpdate(ColdDrink t)
        {
            throw new NotImplementedException();
        }
    }
}
