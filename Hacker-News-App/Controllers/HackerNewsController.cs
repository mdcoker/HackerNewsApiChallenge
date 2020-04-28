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

            // return storyIds;
            return new string[]{"23002228", "23002221", "23002217", "23002214", "23002209"};
        }
       
        [HttpGet("[action]")]
        public HackerStory GetStoryInfo(string storyId)
        {
            HackerStory storyInfo = null;

            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("https://hacker-news.firebaseio.com/");
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            HttpResponseMessage info = client.GetAsync("v0/item/" + storyId + ".json").Result;
            if (info.IsSuccessStatusCode) {
                storyInfo = info.Content.ReadAsAsync<HackerStory>().Result;
            }

            return storyInfo;

        }

        public class HackerStory
        {
            public string title {get; set;}
            public string by {get; set;}
            public string url {get; set;}
        }
    }
}
