using System;
using System.Data;
using System.Net.Http;
using System.Net.Http.Headers;
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

            IEnumerable<string> storyIds = null;

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("https://hacker-news.firebaseio.com/v0/newstories.json");
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            HttpResponseMessage response = client.GetAsync("").Result;
            if(response.IsSuccessStatusCode) {
                storyIds = response.Content.ReadAsAsync<IEnumerable<string>>().Result;
            }

            return new HackerNewsInformation {
                Information = storyIds
            };
        }

        public class HackerNewsInformation
        {
            public IEnumerable<string> Information {get; set;}
        }
    }
}
