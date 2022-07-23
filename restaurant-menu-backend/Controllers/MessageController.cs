using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace restaurant_menu_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        MessageManager messageManager = new MessageManager(new EfMessageDal());

        [HttpGet]
        public IActionResult GetMessage()
        {
            using var c = new Context();
            var values = messageManager.TGetList();
            return Ok(values);
        }


        [HttpPost("InsertMessage")]
        public IActionResult InsertMessage(Message message)
        {
            var entity = new Message()
            {
                firstName = message.firstName,
                LastName = message.LastName,
                Email = message.Email,
                Phone = message.Phone,
                CustomerMessage = message.CustomerMessage,              
            };

            messageManager.TAdd(entity);
            return Ok();

        }
    }
}
