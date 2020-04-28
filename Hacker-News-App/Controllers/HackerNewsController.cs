using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Hacker_News_App.Controllers
{
    [Route("api/[controller]")]
    public class HackerNewsController : Controller
    {
        [HttpGet("[action]")]
        public HackerNewsInformation Information()
        {
            return new HackerNewsInformation {
                Information = "This is my first Angular app!"
            };
        }

        public class HackerNewsInformation
        {
            public string Information {get; set;}
        }
    }
}
