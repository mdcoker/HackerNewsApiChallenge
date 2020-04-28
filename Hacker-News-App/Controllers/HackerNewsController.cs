using System;
using System.Data;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Hacker_News_App.Controllers
{
    [Route("api/[controller]")]
    public class HackerNewsController : Controller
    {
        [HttpGet("[action]")]
        public string[] Information()
        {

            string[] storyIds = null;

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("https://hacker-news.firebaseio.com/");
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            HttpResponseMessage response = client.GetAsync("v0/newstories.json").Result;
            if(response.IsSuccessStatusCode) {
                storyIds = response.Content.ReadAsAsync<string[]>().Result;
            }

            return storyIds;
        }

    }
}
