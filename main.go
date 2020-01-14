package main

import (
	"github.com/labstack/echo"
	"log"
	"os"
	"strconv"
)

func main() {
	e := echo.New()
	e.Debug = true
	e.Static("/", "./public")
  e.GET("/", Feed)
	e.GET("/blog", Blog)
	log.Printf("test")
	t := ParseTemplates(e)
	tl := t.templates.Templates()
	for _, tmp := range tl {
		log.Printf(tmp.Name())
	}
	log.Printf(strconv.FormatInt(int64(len(tl)), 10))
	e.Renderer = t

	go PrepareSiteIndex()
	e.Start(":" + os.Getenv("PORT"))
}
