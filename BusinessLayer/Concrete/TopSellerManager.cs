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
    public class TopSellerManager : ITopSellerService
    {
        ITopSellerDal _topSellerDal;

        public TopSellerManager(ITopSellerDal topSellerDal)
        {
            _topSellerDal = topSellerDal;
        }

        public void TAdd(TopSeller t)
        {
            _topSellerDal.Insert(t);
        }

        public void TDelete(TopSeller t)
        {
            throw new NotImplementedException();
        }

        public TopSeller TGetByID(int id)
        {
            throw new NotImplementedException();
        }

        public List<TopSeller> TGetList()
        {
            return _topSellerDal.GetList();
        }

        public void TUpdate(TopSeller t)
        {
            throw new NotImplementedException();
        }
    }
}
