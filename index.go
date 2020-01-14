package main

import ("log")

var SiteIndex []Page

type Query struct {
  Keyword string
  Category string
}

func PrepareSiteIndex() {
  SiteIndex = []Page{
    Page{
      URL: "/blog/0/test-entry",
      Title: "Test Entry",
      Abstract: "This is a blog entry",
      Thumb: "/blog/0/thumb.jpg",
    },
  }
  log.Printf("Site dizini başarıyla oluşturuldu.")
}
func SiteSearch(q Query) []Page {
  if (len(SiteIndex) > 0) {
    return SiteIndex
  }
  return make([]Page, 0)
}
