package main

import (
	"github.com/labstack/echo"
	"boraini/blog"
)

func main() {
	e := echo.New()
	e.File("/", "public/index.html")
	e.Static("/", "public")
	e.GET("/blog", blog.Blog)
	e.Logger.Fatal(e.Start(":8080"))
}
