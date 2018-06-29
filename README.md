# hakyll-blog

Setup (nix build)
```bash
nix-shell --command 'cabal build'
dist/build/site/site clean
# build
dist/build/site/site build
# hot reload devel
dist/build/site/site watch
```

Ressource: https://iilab.org/news/2015-03-27-nix-osx-haskellng-hakyll.html
