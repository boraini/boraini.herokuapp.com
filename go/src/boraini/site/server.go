package main

import (
	"github.com/labstack/echo"
	"boraini/blog"
	"log"
	"strconv"
	"os"
)

func main() {
	e := echo.New()
	e.Debug = true
	e.GET("/", Feed)
	e.Static("/", "../public")
	e.GET("/blog", blog.Blog)
	log.Printf("test")
	t := ParseTemplates(e)
	tl := t.templates.Templates()
	for _, tmp := range tl {
		log.Printf(tmp.Name())
	}
	log.Printf(strconv.FormatInt(int64(len(tl)), 10))
	e.Renderer = t

	go PrepareSiteIndex()
	e.Start(os.Getenv("PORT"))
}
