using DataAccessLayer.Abstract;
using DataAccessLayer.Repository;
using EntityLayer.Concrete;

namespace restaurant_menu_backend.Controllers
{
    public class EfCategoryDal : GenericRepository<Category>, ICategoryDal
    {
    }
}