package main

import (
  "github.com/labstack/echo"
  "net/http"
)

type FeedMarshal struct {
  Title string
  Items []Page
}
func Feed(c echo.Context) error {
  q := Query{
    Category: c.QueryParam("category"),
    Keyword: c.QueryParam("keyword"),
  }
  results := SiteSearch(Query{})
  data := FeedMarshal{
    Items: results,
  }
  if (len(q.Category) > 0) {
    data.Title = "Category: " + q.Category
  } else if (len(q.Keyword) > 0) {
    data.Title = "Search results for " + q.Keyword
  }
  err := c.Render(http.StatusOK, "feed.html", data)
  return err
}
