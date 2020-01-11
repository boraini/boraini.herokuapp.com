package main

import(
  "github.com/labstack/echo"
  "html/template"
  "io"
  "path/filepath"
  "log"
)

type Template struct {
    templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
    return t.templates.ExecuteTemplate(w, name, data)
}

func ParseTemplates(e *echo.Echo) *Template {
  var absp string
  var tmps *template.Template
  var err error
  absp, err = filepath.Abs("../views/*")
  if (err != nil) {e.Logger.Fatal(err)}
  log.Printf(absp)
  tmps, err = template.ParseGlob(absp)
  if (err != nil) {e.Logger.Fatal(err)}
  t := &Template{
      templates: template.Must(tmps, err),
  }

  return t
}
