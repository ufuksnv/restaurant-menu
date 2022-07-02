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
            throw new NotImplementedException();
        }

        public void TDelete(ColdDrink t)
        {
            throw new NotImplementedException();
        }

        public ColdDrink TGetByID(int id)
        {
            throw new NotImplementedException();
        }

        public List<ColdDrink> TGetList()
        {
            throw new NotImplementedException();
        }

        public void TUpdate(ColdDrink t)
        {
            throw new NotImplementedException();
        }
    }
}
