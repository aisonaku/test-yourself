# test-yourself

### Run

```
cd frontend
ember server --proxy https://fathomless-tundra-61665.herokuapp.com
```

### Build

```
cd frontend
ember build --environment=production
cp dist/assets/vendor-*.js ../backend/app/assets/javascripts/vendor.js
cp dist/assets/tys-*.js ../backend/app/assets/javascripts/tys.js
cp dist/assets/vendor-*.css ../backend/app/assets/stylesheets/vendor.css
cp dist/assets/tys-*.css ../backend/app/assets/stylesheets/tys.css
```
