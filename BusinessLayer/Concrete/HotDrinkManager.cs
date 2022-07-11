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
            _hotDrinkDal.Insert(t);
        }

        public void TDelete(HotDrink t)
        {
            _hotDrinkDal.Delete(t);
        }

        public HotDrink TGetByID(int id)
        {
            return _hotDrinkDal.GetByID(id);
        }

        public List<HotDrink> TGetList()
        {
            return _hotDrinkDal.GetList();
        }

        public void TUpdate(HotDrink t)
        {
            _hotDrinkDal.Update(t);
        }
    }
}
