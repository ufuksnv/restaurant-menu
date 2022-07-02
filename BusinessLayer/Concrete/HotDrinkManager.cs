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
    public class HotDrinkManager: IHotDrinkService
    {
        IHotDrinkDal _hotDrinkDal;

        public HotDrinkManager(IHotDrinkDal hotDrinkDal)
        {
            _hotDrinkDal = hotDrinkDal;
        }

        public void TAdd(HotDrink t)
        {
            throw new NotImplementedException();
        }

        public void TDelete(HotDrink t)
        {
            throw new NotImplementedException();
        }

        public HotDrink TGetByID(int id)
        {
            throw new NotImplementedException();
        }

        public List<HotDrink> TGetList()
        {
            throw new NotImplementedException();
        }

        public void TUpdate(HotDrink t)
        {
            throw new NotImplementedException();
        }
    }
}
