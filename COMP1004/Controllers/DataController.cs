using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace COMP1004.Controllers
{
    [Route("api/data")]
    [ApiController]
    public class DataController : ControllerBase
    {
        // GET: api/<DataController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return Data.GetData().ToArray();
        }

        // POST api/<DataController>
        [HttpPost]
        public IActionResult Post([FromBody] User value)
        {
            if(value.FirstName == "" || value.LastName == "")
            {
                return BadRequest();
            }
            Data.PushData(value);
            return Ok();
        }

        
    }
}
