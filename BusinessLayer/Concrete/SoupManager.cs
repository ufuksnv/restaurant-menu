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
    public class SoupManager: ISoupService
    {
        ISoupDal _soupDal;

        public SoupManager(ISoupDal soupDal)
        {
            _soupDal = soupDal;
        }

        public void TAdd(Soup t)
        {
            _soupDal.Update(t);
        }

        public void TDelete(Soup t)
        {
            _soupDal.Delete(t);
        }

        public Soup TGetByID(int id)
        {
            return _soupDal.GetByID(id);
        }

        public List<Soup> TGetList()
        {
            return _soupDal.GetList(); 
        }

        public void TUpdate(Soup t)
        {
            _soupDal.Update(t);
        }
    }
}
