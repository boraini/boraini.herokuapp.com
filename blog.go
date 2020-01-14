package main

import (
	"github.com/labstack/echo"
	"net/http"
)

func Blog(c echo.Context) error {
  return c.String(http.StatusOK, "blog")
}
