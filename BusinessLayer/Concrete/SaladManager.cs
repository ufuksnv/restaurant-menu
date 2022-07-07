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
    public class SaladManager: ISaladService
    {
        ISaladDal _saladDal;

        public SaladManager(ISaladDal saladDal)
        {
            _saladDal = saladDal;
        }

        public void TAdd(Salad t)
        {
            throw new NotImplementedException();
        }

        public void TDelete(Salad t)
        {
            throw new NotImplementedException();
        }

        public Salad TGetByID(int id)
        {
            return _saladDal.GetByID(id);   
        }

        public List<Salad> TGetList()
        {
            return _saladDal.GetList();
        }

        public void TUpdate(Salad t)
        {
            throw new NotImplementedException();
        }
    }
}
