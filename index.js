const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.all('*', function(req, res) {
    res.setHeader('X-Powered-By', 'ASP.NET');
    if (req.url.includes('/Anonymous/Storage/versionbysun')) {
        res.send('tGmB9rhge5kj07+xL8Yu01nLhs5XasdH5/vyqzHCglJ3Avu2q65ZBgm9wqVSug0ZgPCvOaQshP0ArRhvh0EcZSYJHP1jF0lsRBEeVX7+cKXPYyQtLKot9I+dkqp5y2/xzGwexQuMQwLKcI4i/FMwMMmP6xChgKGDXaP/zybiO1Ff0ieyxhyGSLuVrYOi6HyYe/bUWa7x6Zmvz8kc+g46RoGkktxlqvKbBsH06olPZ5Ych4OYaEoxAbDbMH2FgTd+mUnPU0CaUIx9CvbbQDlTSJ+atZUgzA8l0zet8H8XMNMssCsMPqbUMmgzxb7gsZwhZfcIUjAT1DRkmavtbTvO/9ENwNfoiE4wNldDvJVjJOxBUWOlS2V0buqbwwcnEImjkwr6WXiVHebavR4g6ksznr6HY+K0PPwuuAdGGItCE8W8V7FQ77VSMdkdfrdOAl+oYRWXmHs9k0VieKq5XLRjVCLGwqDV+MHWIcEDGrjzbbOKg0A4/jDInGyLRo0hVwXcP9uaqCLnwCHKlUhc/zAzSDZ5tfSQD4iOE01+Cd14m8+fvOsK8okdiwptSwd+U2m4XCCO0D3I2wQ3JjN5cEZMuVMBLo9comoMKkXfwN9JIBf+Ndh/xx+GXGj4fw1K8r1vTei2L/bfDQty596xi01iBIvzQK7bmDt2jUrZnmUECLVL3cvIFAG08JcHPcvgrsLlb1TsDI1B7UfKSwbkAWSdNw==')
        return;
    }

    if (req.url.includes('/Anonymous/Now')) {
        res.send('kay9pO4oVJJYXZEfUlgTfPTF1duKL3EqKJFWmUEqp8mQYMuDJsl/ZcyKEALmoBnSzZaHVtDtspkXBEazuW2usZopB9a+I3Gjc6iMtMjumo+cEIaWCrzOul+SMFsGBpZ8T0e07oR0XBv3+YsR4eoUdn/YF7/Mz5LI6KlrJsG5qcDndsIwuPKjWSQhElFSGkjG')
        return;
    }

    if (req.url.includes('/Anonymous/Storage/logs')) {
        res.send('k0Jn3Vsr7/atSjhIHG+bbd72G1YVuMk2Xvnc6NmJHMMNZ8UNdBAYvuYnTCakvvnQTW0ZhFWy5OdoDBwi13bil5KM28B/TaonaCoULgwByMcEgVjeCtcverZLTffzcmR+YwJLTWnACnAJEq9lq9+EdQydGIcVRHT5efRQu7kdH/AZ55zYeuLDaxoG0hwyuTOh8ipr8D88YDUg1r7kUgl1gSDCyzEZJ4B4m+vQ0p4Q+8M=')
        return;
    }

    let regex = /\/Api.*\/Profile/;

    if (regex.test(req.url)) {
        res.send('LkEP9+jdfJ2dy5d+sfxv0ifoeJhhYxko5XJXyoCWJdUINZHImKXxm+Gw37RvVgdnb9mDdqZHeFWq/fU5H5eyDb+194djfzv6IfLe5KHpNpA9nHE8Y2ojcMN0YE/sbDk2qu3gpGm2lfh4rVMicUEuZ3JNnDLExwg9L0gfRPF5NYV6mbBzqfYZumKM1fEZBy5ZedeDqMN7XBFNwiDW7BToMP6wIAHKfIPFQRV0B6OChGYU0UuefpFLXS71OrP/YPEY')
        return;
    }

    regex = /\/Api.*\/Balance/;

    if (regex.test(req.url)) {
        res.send('SQwbIN3cM8AJHnYeQOANdLIT9kyO0CfeWv0ebVyqpGZivHgW0nrL2gvC/EiX8zSGBuWJUM3zfdexwOoA8DLMTqcuR8i8pn/QRtZ0dO0CGzA=')
        return;
    }

    regex = /\/Api.*\/GetPackageOverview/;

    if (regex.test(req.url)) {
        res.send('irRNqtMmmvRHJ8ZX9Vc8AqohGkHA87A93A4qmVNvWE2xuaavSd/SUDfJhlemZsCZykqmC8gDbZ44P0sDM7iCKukUK2jAJRUm9Jv1sive9lmPeaMVZ0MJ4H6OGxmQ21uC5IuWO4meJaLvfNUg2XpOdXWiKRPIKGE+Doqq9VsPZ48=')
        return;
    }
})

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`
